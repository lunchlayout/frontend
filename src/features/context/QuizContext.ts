import { IQuizContext } from "@features/types";
import { createGenericContext } from "@shared/lib";

const { Context, useContext } = createGenericContext<IQuizContext>(null);

export { Context, useContext };
