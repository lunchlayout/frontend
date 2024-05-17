import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { reducer as dishesReducer } from "@entities/Dish";
import { reducer as cafesReducer } from "@entities/Cafe";

const mainReducer = combineReducers({
	dishes: dishesReducer,
	cafes: cafesReducer,
});

const Store = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddl => getDefaultMiddl().concat(logger),
});

export { Store, mainReducer };
