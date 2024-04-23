import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { IDefaultProps } from "../../shared/types";
import {logger} from 'redux-logger'
import { dishesReducer } from "../../entities/Dish";
import { cafesReducer } from "../../entities/Cafe";

const mainReducer = combineReducers({
    dishes: dishesReducer,
    cafes: cafesReducer
})

const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddl) => getDefaultMiddl().concat(logger)
})



export default function ReduxProvider({children}: IDefaultProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
