self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.registration.unregister();for(const c of await self.clients.matchAll({type:'window'}))c.navigate('https://maryambahrambeigi01-art.github.io/houppad/');})()));
self.addEventListener('fetch',e=>e.respondWith(Response.redirect('https://maryambahrambeigi01-art.github.io/houppad/',302)));
