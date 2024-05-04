import { IRatingContext } from "@features/types";
import { createGenericContext } from "@shared/lib";

const {Context, useContext} = createGenericContext<IRatingContext>(null);

export {Context, useContext}