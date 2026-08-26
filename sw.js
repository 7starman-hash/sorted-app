// Minimal service worker. Its only job right now is to exist with a fetch
// handler, which is one of Chrome's requirements for the install prompt to
// fire. It doesn't cache anything or provide offline support yet — every
// request just passes straight through to the network unchanged.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
