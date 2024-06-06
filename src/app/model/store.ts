import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as dishesReducer } from "@entities/Dish";
import { reducer as cafesReducer } from "@entities/Cafe";

const mainReducer = combineReducers({
	dishesSlice: dishesReducer,
	cafesSlice: cafesReducer,
});

const Store = configureStore({
	reducer: mainReducer,
});

export { Store, mainReducer };
