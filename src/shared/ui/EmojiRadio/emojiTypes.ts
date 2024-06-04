const EmojiTypes = {
	bad: 1,
	normal: 2,
	good: 3,
	happy: 4,
} as const;

const EmojiRus = {
	bad: "Плохо",
	normal: "Пойдет",
	good: "Хорошо",
	happy: "Отлично",
} as const;

export { EmojiTypes, EmojiRus };
