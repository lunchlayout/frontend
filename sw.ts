/// <reference lib="WebWorker" />

// export empty type because of tsc --isolatedModules flag
export type {};
declare const self: ServiceWorkerGlobalScope;

import { CacheConfig, CACHE_VERSION } from "@app/config";
import { getCacheVersison } from "@app/lib";

self.addEventListener("install", event => {
	event.waitUntil(
		(async () => {
			for (const cacheSetting of Object.values(CacheConfig)) {
				const cache = await caches.open(cacheSetting.name);
				await cache.addAll(cacheSetting.resources);
			}
			await self.skipWaiting();
		})(),
	);
});

self.addEventListener("activate", async event => {
	event.waitUntil(
		(async () => {
			//* Передача контроля текущему сервис воркеру
			await self.clients.claim();
			const cacheNames = await caches.keys();
			cacheNames.forEach(cacheName => {
				if (!(getCacheVersison(cacheName) === CACHE_VERSION)) {
					caches.delete(cacheName);
				}
			});
		})(),
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		(async () => {
			const cachedResponse = await caches.match(event.request);
			if (cachedResponse) return cachedResponse;

			return await fetch(event.request);

			//    if(!response || response.status !== 200 || response.type !== 'basic') {
			//     return response;
			//   }
			//   const clonedResponse = response.clone();

			//   const cache = await caches.open(`${CACHE_VERSION}:dynamic`)
			//   cache.put(event.request, clonedResponse);
		})(),
	);
});
