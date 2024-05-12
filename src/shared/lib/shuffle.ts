/**
 * Тасование массива алгоритмом Фишера — Йетса
 * @param arr - массив элементов
 */
function shuffle(arr: unknown[]) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

export { shuffle };
