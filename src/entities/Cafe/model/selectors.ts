import { IRootState } from "@app/types";


const сafe = (state: IRootState) => state.cafes.cafe;

const pageCnt = (state: IRootState) => state.cafes.pageCnt;

const currentPage = (state: IRootState) => state.cafes.currentPage;



export {сafe, pageCnt, currentPage}



