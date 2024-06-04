import { createSlice, isFulfilled, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initState";
import { isPending, isRejected, shuffle } from "@shared/lib";
import { getDishById } from "./thunks";
import { IGetDishByIdRes } from "../types";
import { IProgress } from "@shared/ui/Progress";
import { Group, Object3DEventMap } from "three";

const DishesSlice = createSlice({
	name: "dishes",
	initialState,
	reducers: {
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setModelLoadingValue(state, action: PayloadAction<number>) {
			if (state.modelLoadingProgress) {
				state.modelLoadingProgress.value = action.payload;
			}
		},
		setModelLoadingInit(state, action: PayloadAction<IProgress>) {
			state.modelLoadingProgress = action.payload;
		},
		setScene(state, action: PayloadAction<Group<Object3DEventMap>>) {
			state.scene = action.payload;
		},
		setDishId(state, action: PayloadAction<string>) {
			state.dishId = action.payload;
		},
		setCurrentEntIdx(state, action: PayloadAction<number>) {
			const { dish, entertainmentDetails: entDetails } = state;
			if (entDetails && dish) {
				const { length: entLength } = dish.entertainment;
				if (action.payload < 0) {
					entDetails.currentEntIdx = entLength - 1;
				} else if (action.payload === entLength) {
					entDetails.currentEntIdx = 0;
				} else {
					entDetails.currentEntIdx = action.payload;
				}
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(
			getDishById.fulfilled,
			(state, action: PayloadAction<IGetDishByIdRes>) => {
				delete state.modelLoadingProgress;
				delete state.scene;
				state.entertainmentDetails = {
					currentEntIdx: 0,
				};
				const { entertainment } = action.payload;
				const entertainmentArr = [
					...entertainment.stories,
					...entertainment.quizzes,
					...entertainment.videos,
				];
				shuffle(entertainmentArr);
				state.dish = {
					...action.payload,
					entertainment: entertainmentArr,
				};
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
