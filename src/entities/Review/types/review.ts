type Rate = 1 | 2 | 3 | 4

interface IReview {
    text: string,
    rate: Rate
}

export type {IReview}