const CACHE_NAME = 'miniplan-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Service Worker kurulumu
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache açıldı');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache'den yanıt verme
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Eski cache'leri temizleme
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync işlevi
function doBackgroundSync() {
  return new Promise((resolve) => {
    console.log('Background sync çalışıyor...');
    resolve();
  });
}

// Push notification desteği
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'MiniPlan hatırlatıcı!',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Aç'
      },
      {
        action: 'close',
        title: 'Kapat'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('MiniPlan', options)
  );
});

// Notification tıklama
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
