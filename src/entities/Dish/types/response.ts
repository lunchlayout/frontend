import { IDishWithCafe, IQuiz, IStory, IVideo } from "@entities/Dish/types";

interface IEntertainmentRes {
	stories: IStory[];
	videos: IVideo[];
	quizzes: IQuiz[];
}

interface IGetDishByIdRes extends Omit<IDishWithCafe, "entertainment"> {
	entertainment: IEntertainmentRes;
}

export type { IGetDishByIdRes };
