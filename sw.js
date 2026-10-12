// Offline-Cache für das Dashboard: App-Dateien werden lokal gespeichert, Daten liegen in IndexedDB.
// Das Sammelkarten-Depot unter tcg/ hat seinen eigenen Service Worker.
const CACHE = "finanzen-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("finanzen-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
// Netz zuerst (damit Updates ankommen), bei Offline aus dem Cache.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).pathname.includes("/tcg/")) return;
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
