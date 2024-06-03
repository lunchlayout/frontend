interface IVideo {
	title: string;
	link: string;
}

interface IStory {
	description: string;
}

interface IQuiz {
	question: string;
	answer: string;
	options: string[];
}

type Entertainment = (IStory | IVideo | IQuiz)[];

interface IEntertainmentDetails {
	currentEntIdx: number;
}

export type { IVideo, IStory, IQuiz, Entertainment, IEntertainmentDetails };
