const urls = [
  '/',
  '/index.html',
  '/javascripts/app.js',
  '/css/materialize.min.css',
  '/manifest.json',
  '/fonts/roboto/Roboto-Bold.woff',
  '/fonts/roboto/Roboto-Bold.woff2',
  '/fonts/roboto/Roboto-Light.woff',
  '/fonts/roboto/Roboto-Light.woff2',
  '/fonts/roboto/Roboto-Medium.woff',
  '/fonts/roboto/Roboto-Medium.woff2',
  '/fonts/roboto/Roboto-Regular.woff',
  '/fonts/roboto/Roboto-Regular.woff2',
  '/fonts/roboto/Roboto-Thin.woff',
  '/fonts/roboto/Roboto-Thin.woff2',
];

self.addEventListener('activate', () =>  console.log('SW activated!'));

self.addEventListener('fetch', (event) => {
  if (event.request.url.match(/chrome-extension/g)) return;
  if (event.request.method === 'POST') return;

  event.respondWith(
    caches.open('todo-list-v1').then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          return response.clone();
        }

        throw Error('Response cached missing');
      }).catch((error) => {
        console.error('Fail to respond', event.request.url, error);
      });
    })
  );
});

self.addEventListener('install', (event) => {
  console.log('SW installed');

  event.waitUntil(
    caches.open('todo-list-v1').then((cache) => {
      return cache.addAll(urls).catch((error) => {
        console.error('Prefetch fail :(', error);
      });
    }).then(() => {
      return self.skipWaiting();
    })
  );
});
