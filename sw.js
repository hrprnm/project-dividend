const CACHE_NAME = 'dividend-pwa-pastel-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('script.google.com')) return; 
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
