type IRating = 1 | 2 | 3 | 4;

interface IReview {
	text: string;
	rating: IRating;
}

export type { IReview, IRating };
