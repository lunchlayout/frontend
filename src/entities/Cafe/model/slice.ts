import { createSlice, isFulfilled, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initState";
import { isPending, isRejected } from "@shared/lib";
import { IGetCafeByIdRes, IGetCafesRes } from "../types";
import { getCafeById, getCafes } from "./thunks";

const CafesSlice = createSlice({
	name: "cafes",
	initialState,
	reducers: {
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(
			getCafeById.fulfilled,
			(state, action: PayloadAction<IGetCafeByIdRes>) => {
				state.currentCafe = action.payload;
			},
		);
		builder.addCase(
			getCafes.fulfilled,
			(state, action: PayloadAction<IGetCafesRes>) => {
				state.currentCafes = action.payload;
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
	getCafes,
};

export { reducer, actions };
