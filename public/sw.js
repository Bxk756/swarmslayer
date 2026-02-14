self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("SwarmSlayer PWA active");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
