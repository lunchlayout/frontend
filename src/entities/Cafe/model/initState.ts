import { ICafesState } from "../types";

const initialState: ICafesState = {
	isLoading: false,
	errors: [],
	currentPage: 1,
	pageCnt: 0,
};

export { initialState };
