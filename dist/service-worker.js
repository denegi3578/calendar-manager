const CACHE_NAME = 'calendar-tasks-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// 설치 시 캐시
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// 활성화
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 네트워크 요청 가로채기 (오프라인 지원)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 반환
        if (response) {
          return response;
        }

        // 없으면 네트워크 요청
        return fetch(event.request).then(response => {
          // 유효하지 않은 응답이면 그냥 반환
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 응답 복제해서 캐시에 저장
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // 네트워크 실패 시 오프라인 페이지 반환 (선택사항)
          return caches.match('/');
        });
      })
  );
});

// 푸시 알림 (나중에 활용 가능)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '새로운 알림이 있습니다',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'calendar-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('Calendar Tasks', options)
  );
});

// 알림 클릭
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
