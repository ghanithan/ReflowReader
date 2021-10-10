const staticReflowReader = "reflow-reader-pwa-v1"
const assets = [
  "/RelowReader",
  "/RelowReader/index.html",
  "/RelowReader/css/style.css",
  "/RelowReader/js/app.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticReflowReader).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })