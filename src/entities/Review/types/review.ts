type IRating = 1 | 2 | 3 | 4;

interface IReview {
	comment: string;
	rating: IRating;
}

export type { IReview, IRating };
