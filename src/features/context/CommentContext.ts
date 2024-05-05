import { ICommentContext } from "@features/types";
import { createGenericContext } from "@shared/lib";

const { Context, useContext } = createGenericContext<ICommentContext>(null);

export { Context, useContext };
