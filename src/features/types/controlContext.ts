import { IRating } from "@entities/Review/types";
import { IFormControlContext } from "@shared/types";

type IRatingContext = IFormControlContext<
	IRating | undefined,
	HTMLInputElement
>;

type ICommentContext = IFormControlContext<string, HTMLTextAreaElement>;

type IQueryContext = IFormControlContext<string, HTMLInputElement>;

type IQuizContext = IFormControlContext<string | undefined, HTMLInputElement>;

export type { IRatingContext, ICommentContext, IQueryContext, IQuizContext };
