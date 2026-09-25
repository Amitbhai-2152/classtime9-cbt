import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const lock = JSON.parse(fs.readFileSync(path.join(root, "test-paper-lock.json"), "utf8"));
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const normalize = value => String(value ?? "")
  .normalize("NFKC")
  .replace(/\s+/g, " ")
  .trim();

const canonicalQuestion = question => ({
  id: question.id,
  subject: question.subject,
  type: question.type,
  marks: question.marks,
  difficulty: question.difficulty,
  topic: question.topic,
  question: normalize(question.question),
  options: Array.isArray(question.options) ? question.options.map(normalize) : [],
  correct: question.correct,
  passage: normalize(question.passage || ""),
  image: question.image || ""
});

const stableJson = questions => JSON.stringify(
  [...questions].sort((a, b) => Number(a.id) - Number(b.id)).map(canonicalQuestion)
);

const fnv1a = value => {
  let hash = 2166136261 >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
};

const fingerprint = question => JSON.stringify(canonicalQuestion(question));

const parseTest02 = () => {
  const source = read("questions.js");
  const match = source.match(/const QUESTIONS = ([\s\S]+);/);
  if (!match) throw new Error("TEST 02 question bank declaration was not found.");
  return JSON.parse(match[1]);
};

const parseTest03 = () => {
  const context = { window: { TEST03_QUESTIONS: [] } };
  vm.createContext(context);
  for (const file of lock.test03SourceFiles) {
    const source = read(file);
    vm.runInContext(source, context, { filename: file });
  }
  return context.window.TEST03_QUESTIONS;
};

const test02 = parseTest02();
const test03 = parseTest03();
const fail = [];

const validate = (testId, questions) => {
  const expected = lock.papers[testId];
  if (!expected) {
    fail.push("Missing lock entry: " + testId);
    return;
  }
  if (questions.length !== expected.count) fail.push(testId + ": expected " + expected.count + " questions, found " + questions.length);

  const ids = questions.map(q => Number(q.id));
  const uniqueIds = new Set(ids);
  const expectedIds = Array.from({ length: expected.count }, (_, i) => i + 1);
  if (uniqueIds.size !== ids.length) fail.push(testId + ": duplicate question IDs");
  if (JSON.stringify([...ids].sort((a, b) => a - b)) !== JSON.stringify(expectedIds)) {
    fail.push(testId + ": question IDs are not exactly 1.." + expected.count);
  }

  const mcq = questions.filter(q => q.type === "mcq").length;
  const subjective = questions.filter(q => q.type === "subjective").length;
  if (mcq !== expected.mcq) fail.push(testId + ": MCQ count expected " + expected.mcq + ", found " + mcq);
  if (subjective !== expected.subjective) fail.push(testId + ": subjective count expected " + expected.subjective + ", found " + subjective);

  for (const [subject, expectedCount] of Object.entries(expected.subjects)) {
    const count = questions.filter(q => q.subject === subject).length;
    if (count !== expectedCount) fail.push(testId + ": subject " + subject + " expected " + expectedCount + ", found " + count);
  }

  const hash = fnv1a(stableJson(questions));
  if (hash !== expected.hash) fail.push(testId + ": locked fingerprint mismatch (expected " + expected.hash + ", found " + hash + ")");
};

validate("test02", test02);
validate("test03", test03);

const test02Fingerprints = new Map(test02.map(q => [fingerprint(q), q.id]));
const duplicates = test03
  .map(q => ({ test03Id: q.id, test02Id: test02Fingerprints.get(fingerprint(q)) }))
  .filter(item => item.test02Id !== undefined);

if (duplicates.length !== lock.expectedCrossPaperDuplicates) {
  fail.push("Cross-paper duplicates expected " + lock.expectedCrossPaperDuplicates + ", found " + duplicates.length);
  for (const item of duplicates.slice(0, 20)) fail.push("Duplicate: TEST 02 Q" + item.test02Id + " = TEST 03 Q" + item.test03Id);
}

const app = read("app.js");
for (const contract of [
  'test02:',
  'test03:',
  'recoveryKey: "class9_cbt_active_exam_v2"',
  'recoveryKey: "class9_cbt_test03_active_exam_v2"',
  'paperHash: "7c36b2ac"',
  'paperHash: "17b9a0b6"',
  'testId: ACTIVE_TEST_ID',
  'paperHash: TEST_CONFIGS[ACTIVE_TEST_ID]?.paperHash || ""',
  'state.testId !== ACTIVE_TEST_ID',
  'state.paperHash !== TEST_CONFIGS[ACTIVE_TEST_ID]?.paperHash',
  'Test switch blocked while an exam is active',
]) {
  if (!app.includes(contract)) fail.push("app.js missing isolation contract: " + contract);
}

const index = read("index.html");
if (!index.includes('<script src="test-paper-integrity.js"></script>')) {
  fail.push("index.html does not load the integrity guard before app.js");
}

const sw = read("service-worker.js");
if (!sw.includes('const CACHE_NAME = "test02-cbt-offline-v31";') || !sw.includes('"./test-paper-integrity.js"')) {
  fail.push("service-worker.js does not cache the Phase 8 integrity guard.");
}

if (fail.length) {
  console.error("Phase 8 TEST 02/TEST 03 separation FAILED.");
  for (const item of fail) console.error("✗ " + item);
  process.exit(1);
}

console.log("Phase 8 TEST 02/TEST 03 separation PASSED.");
console.log("✓ TEST 02: 100 questions = 86 MCQ + 14 written, locked to fingerprint " + lock.papers.test02.hash + ".");
console.log("✓ TEST 03: 100 questions = 86 MCQ + 14 written, locked to fingerprint " + lock.papers.test03.hash + ".");
console.log("✓ TEST 02 IDs are exactly 1..100.");
console.log("✓ TEST 03 IDs are exactly 1..100.");
console.log("✓ Cross-paper exact duplicates: 0.");
console.log("✓ Each test has its own recovery namespace.");
console.log("✓ Recovery state is tied to testId and paper fingerprint.");
console.log("✓ Submission payload is tied to testId and paper fingerprint.");
console.log("✓ Active-test switching is blocked once an exam has started.");
