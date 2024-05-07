import { IQuizResultContext } from "@features/types";
import { createGenericContext } from "@shared/lib";

const { Context, useContext } = createGenericContext<IQuizResultContext>(null);

export { Context, useContext };
