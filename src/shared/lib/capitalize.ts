function capitalize(str: string) {
	return str.replace(/\b\w{1}/g, firstLetter => firstLetter.toUpperCase());
}

export { capitalize };
