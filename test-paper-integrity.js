(function () {
  const lock = {
    test02: { id: "test02", count: 100, mcq: 86, subjective: 14, hash: "7c36b2ac" },
    test03: { id: "test03", count: 100, mcq: 86, subjective: 14, hash: "17b9a0b6" }
  };

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

  const getBank = testId => {
    if (testId === "test02") return Array.isArray(window.TEST02_QUESTIONS) ? window.TEST02_QUESTIONS : [];
    if (testId === "test03") return Array.isArray(window.TEST03_QUESTIONS) ? window.TEST03_QUESTIONS : [];
    return [];
  };

  const validateBank = testId => {
    const questions = getBank(testId);
    const expected = lock[testId];
    const errors = [];

    if (!expected) errors.push("Unknown test id.");
    if (!questions.length) errors.push("Question bank is empty.");

    const ids = questions.map(question => Number(question.id));
    const idSet = new Set(ids);
    if (idSet.size !== questions.length) errors.push("Duplicate question IDs.");
    const expectedIds = Array.from({ length: expected?.count || 0 }, (_, index) => index + 1);
    if (JSON.stringify([...ids].sort((a, b) => a - b)) !== JSON.stringify(expectedIds)) {
      errors.push("Question IDs are not exactly 1.." + expected?.count + ".");
    }

    const mcq = questions.filter(question => question.type === "mcq").length;
    const subjective = questions.filter(question => question.type === "subjective").length;
    if (mcq !== expected?.mcq) errors.push("MCQ count mismatch.");
    if (subjective !== expected?.subjective) errors.push("Subjective count mismatch.");
    if (fnv1a(stableJson(questions)) !== expected?.hash) errors.push("Paper fingerprint does not match the locked release.");

    return { valid: errors.length === 0, errors, questions };
  };

  const validateSeparation = () => {
    const test02 = validateBank("test02");
    const test03 = validateBank("test03");
    const test02ByFingerprint = new Map(test02.questions.map(question => [fingerprint(question), question.id]));
    const duplicates = test03.questions
      .map(fingerprint)
      .filter(key => test02ByFingerprint.has(key))
      .map(key => ({ test02Id: test02ByFingerprint.get(key) }));

    return {
      valid: test02.valid && test03.valid && duplicates.length === 0,
      test02,
      test03,
      crossPaperDuplicates: duplicates
    };
  };

  window.TEST02_QUESTIONS = window.TEST02_QUESTIONS || (typeof QUESTIONS !== "undefined" ? QUESTIONS : []);
  window.TEST_PAPER_INTEGRITY = {
    lock,
    getBank,
    validateBank,
    validateSeparation
  };
})();
