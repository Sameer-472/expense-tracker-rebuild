const CACHE_NAME = 'v3';
const assets = [
    '/',
    '/index.html',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/manifest.json',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/apple-touch-icon.png',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/mstile-150x150.png',
    '/favicon.ico',
    '/browserconfig.xml',
];

const self = this;

// install service worker
self.addEventListener('install', (e) => {
    e.waitUntil(
        // setting assets to cache
        caches.open(CACHE_NAME).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))
            );
        })
    );
});

// fetch events
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(e.request);
        })
    );
});