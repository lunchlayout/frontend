function createPathURL(...paths: string[]) {
	return "/" + paths.join("/");
}

export { createPathURL };
