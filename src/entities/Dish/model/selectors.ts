import { IRootState } from "@app/types";

const dish = (state: IRootState) => state.dishes.dish;

const dishEntDetails = (state: IRootState) => state.dishes.entertainmentDetails;

const modelLoadingProgress = (state: IRootState) =>
	state.dishes.modelLoadingProgress;

export { dish, modelLoadingProgress, dishEntDetails };
