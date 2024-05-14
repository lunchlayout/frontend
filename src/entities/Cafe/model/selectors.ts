import { IRootState } from "@app/types";

const сafe = (state: IRootState) => {
	return {
		logo: state.cafes.cafe?.logo,
		name: state.cafes.cafe?.name,
	};
};

const dishes = (state: IRootState) => state.cafes.cafe?.dishes;

const pageCnt = (state: IRootState) => state.cafes.pageCnt;

const isLoading = (state: IRootState) => state.cafes.isLoading;

const errors = (state: IRootState) => state.cafes.errors;

export { сafe, pageCnt, dishes, isLoading, errors };
