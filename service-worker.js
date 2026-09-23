const CACHE_NAME = "class9-cbt-offline-v10";
const APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./questions.js",
  "./style.css",
  "./submission-queue.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function getAppHtml(request) {
  const cached = await caches.match(request);
  const response = cached || await fetch(request);
  const html = await response.clone().text();

  // index.html does not need to be edited directly: the service worker injects
  // the Phase 3 queue script after app.js has loaded.
  if (!html.includes("submission-queue.js")) {
    const injected = html.replace(
      /<\/body>/i,
      '<script src="./submission-queue.js"></script></body>'
    );
    return new Response(injected, {
      status: response.status,
      statusText: response.statusText,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
  return response;
}

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isAppDocument = url.origin === self.location.origin &&
    (request.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/"));

  if (isAppDocument) {
    event.respondWith(
      getAppHtml(request).catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (response && response.ok && new URL(request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    }).catch(() => caches.match("./index.html"))
  );
});
