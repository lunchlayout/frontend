import { IQuiz } from "@entities/Dish/types";
import { IDefaultProps } from "@shared/types";

export interface IQuizOptionsProps
	extends IDefaultProps,
		Pick<IQuiz, "options"> {
	disabled?: boolean;
}
