import { IRootState } from "@app/types";

const сafe = (state: IRootState) => {
	return {
		logo: state.cafes.cafe?.logo,
		name: state.cafes.cafe?.name,
	};
};

const dishes = (state: IRootState) => state.cafes.cafe?.dishes;

const pageCnt = (state: IRootState) => state.cafes.pageCnt;

const currentPage = (state: IRootState) => state.cafes.currentPage;

export { сafe, pageCnt, currentPage, dishes };
