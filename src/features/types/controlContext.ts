import { IFormControlContext } from "@shared/types";

type IQueryContext = IFormControlContext<string, HTMLInputElement>;

type IQuizContext = IFormControlContext<string | undefined, HTMLInputElement>;

export type { IQueryContext, IQuizContext };
