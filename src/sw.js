const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: `cache-v${CACHE_VERSION}`,
};
const urlsToPrefetch = [
  'https://2cf81e51.ngrok.io',
  '/index.html',
  '/manifest.json',
  '/javascripts/modules/save-local.js',
  '/javascripts/app.js',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/fonts/roboto/Roboto-Regular.woff',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/fonts/roboto/Roboto-Regular.woff2',
  'https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5RV6cRhDpPC5P4GCEJpqGoc.woff',
  'https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then((cache) => {
      return cache.addAll(urlsToPrefetch).catch((error) => {
        console.log('Prefetching fails', error);
      });
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', () => console.log('activate'));

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CURRENT_CACHES.prefetch).then((cache) => {
      return cache.match(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      console.warn('Fail to respond "%s" from cache: %O', event.request.url, error);
      return fetch(event.request, { mode: 'no-cors' });
    })
  );
});
