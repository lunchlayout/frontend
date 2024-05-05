import { createSlice, isFulfilled, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initState";
import { isPending, isRejected } from "../../../shared/lib";
import { getDishById } from "./thunks";
import { IGetDishByIdRes } from "../types";

const DishesSlice = createSlice({
	name: "dishes",
	initialState,
	reducers: {
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(
			getDishById.fulfilled,
			(state, action: PayloadAction<IGetDishByIdRes>) => {
				state.dish = action.payload;
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

const { reducer } = DishesSlice;
const actions = {
	...DishesSlice.actions,
	getDishById,
};

export { reducer, actions };
