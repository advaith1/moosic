importScripts('/cache-polyfill.js')

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('moosic-12/22/18').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/images/moosic.png',
       '/images/moosic2.png',
       '/assets/css/main.css',
       '/assets/css/font-awesome.min.css',
       '/assets/js/main.js',
       '/assets/js/util.js',
       '/assets/js/breakpoints.min.js',
       '/assets/js/browser.min.js',
       '/assets/js/jquery.scrollex.min.js',
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
