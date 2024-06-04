import { IRootState } from "@app/types";
import { ICafe } from "../types";

const currentCafe = (state: IRootState): ICafe | undefined => {
	if (state.cafesSlice.currentCafe) {
		return {
			logo: state.cafesSlice.currentCafe.logo,
			name: state.cafesSlice.currentCafe.name,
		};
	}
};

const currentDishes = (state: IRootState) => {
	if (state.cafesSlice.currentCafe) {
		return {
			dishes: state.cafesSlice.currentCafe?.dishes,
			pageCnt: state.cafesSlice.currentCafe?.pageCnt,
		};
	}
};

const currentCafes = (state: IRootState) => state.cafesSlice.currentCafes;

const isLoading = (state: IRootState) => state.cafesSlice.isLoading;

const errors = (state: IRootState) => state.cafesSlice.errors;

export { currentCafe, currentCafes, currentDishes, isLoading, errors };
