importScripts('/cache-polyfill.js')

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/cdn-cgi/apps/head/bWQZOS9A30R0shY4NhzKCxYSReo.js',
       '/images/moosic.png',
       '/images/moosic2.png',
       '/assets/css/main.css',
       '/assets/css/font-awesome.min.css',
       '/assets/js/main.js',
       '/assets/js/util.js',
       '/assets/js/breakpoints.min.js',
       '/assets/js/browser.min.js',
       '/assets/js/jquery.scrollex.js',
       '/assets/js/jquery.min.js',
       '/images/bg.jpg',
       '/assets/css/images/close.svg'
     ])
   })
 )
})

self.addEventListener('fetch', function(event) {
    console.log(event.request.url)
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
      })
    )
})
