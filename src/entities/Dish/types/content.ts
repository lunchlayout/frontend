interface IVideo {
	title: string;
	link: string;
}

interface IStory {
	description: string;
	img: string;
}

interface IQuiz {
	question: string;
	answer: string;
	options: string[];
}

interface IModel {
	modelLink: string;
}

interface IContent extends IModel {
	stories: IStory[];
	videos: IVideo[];
	quizzes: IQuiz[];
}

export type { IVideo, IStory, IQuiz, IModel, IContent };
