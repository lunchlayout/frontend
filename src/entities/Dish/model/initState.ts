import { IDishesState } from "../types";

const initialState: IDishesState = {
	isLoading: false,
	errors: [],
	//TODO: Для теста
	modelLoadingProgress: {
		value: 50,
		max: 100,
	},
};

export { initialState };
