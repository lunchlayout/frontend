import { IRootState } from "@app/types";

const dish = (state: IRootState) => state.dishes.dish;

const dishCafe = (state: IRootState) => state.dishes.dish?.cafe;

const dishEntDetails = (state: IRootState) => state.dishes.entertainmentDetails;

const scene = (state: IRootState) => state.dishes.scene;

const modelLoadingProgress = (state: IRootState) =>
	state.dishes.modelLoadingProgress;

const isLoading = (state: IRootState) => state.cafes.isLoading;

const errors = (state: IRootState) => state.cafes.errors;

export {
	dish,
	dishCafe,
	modelLoadingProgress,
	dishEntDetails,
	scene,
	isLoading,
	errors,
};
