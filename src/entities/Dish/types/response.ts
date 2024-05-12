import { IDishWithCafeId, IQuiz, IStory, IVideo } from "@entities/Dish/types";

interface IEntertainmentRes {
	stories: IStory[];
	videos: IVideo[];
	quizzes: IQuiz[];
}

interface IGetDishByIdRes extends Omit<IDishWithCafeId, "entertainment"> {
	entertainment: IEntertainmentRes;
}

export type { IGetDishByIdRes };
