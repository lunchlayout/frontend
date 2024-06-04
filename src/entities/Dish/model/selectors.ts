import { IRootState } from "@app/types";

const dish = (state: IRootState) => state.dishesSlice.dish;

const dishId = (state: IRootState) => state.dishesSlice.dishId;

const dishCafe = (state: IRootState) => state.dishesSlice.dish?.cafe;

const dishEntDetails = (state: IRootState) =>
	state.dishesSlice.entertainmentDetails;

const scene = (state: IRootState) => state.dishesSlice.scene;

const modelLoadingProgress = (state: IRootState) =>
	state.dishesSlice.modelLoadingProgress;

const isLoading = (state: IRootState) => state.dishesSlice.isLoading;

const errors = (state: IRootState) => state.dishesSlice.errors;

export {
	dish,
	dishId,
	dishCafe,
	modelLoadingProgress,
	dishEntDetails,
	scene,
	isLoading,
	errors,
};
