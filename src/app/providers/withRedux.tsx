import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { IDefaultProps } from "../../shared/types";


const mainReducer = combineReducers({
    
})

const store = configureStore({
    reducer: mainReducer
})



function ReduxProvider({children}: IDefaultProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export {ReduxProvider}