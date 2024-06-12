function getCacheVersison(cacheName: string) {
	return cacheName.slice(0, cacheName.indexOf(":"));
}

export { getCacheVersison };
