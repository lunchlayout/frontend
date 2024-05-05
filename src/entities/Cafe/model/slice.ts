import { createSlice, isFulfilled, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initState";
import { isPending, isRejected } from "@shared/lib";
import { IGetCafeByIdRes } from "../types";
import { getCafeById } from "./thunks";

const CafesSlice = createSlice({
	name: "cafes",
	initialState,
	reducers: {
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(
			getCafeById.fulfilled,
			(state, action: PayloadAction<IGetCafeByIdRes>) => {
				state.pageCnt = action.payload.pageCnt;
				state.cafe = { ...action.payload, pageCnt: undefined } as Omit<
					IGetCafeByIdRes,
					"pageCnt"
				>;
			},
		);
		builder.addMatcher(isFulfilled, state => {
			state.isLoading = false;
			state.errors = [];
		});
		builder.addMatcher(isPending, state => {
			state.isLoading = true;
			state.errors = [];
		});
		builder.addMatcher(
			isRejected,
			(state, action: PayloadAction<Error>) => {
				state.isLoading = false;
				state.errors.push(action.payload);
			},
		);
	},
});

const { reducer } = CafesSlice;
const actions = {
	...CafesSlice.actions,
	getCafeById,
};

export { reducer, actions };
