import { createSlice, isFulfilled, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initState";
import { isPending, isRejected } from "../../../shared/lib";
import { IError } from "../../../shared/Error";
import { IGetCafeByIdRes } from "../types";
import { getCafeById } from "./thunks";

const CafesSlice = createSlice({
    name: 'cafes',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getCafeById.fulfilled, (state, action: PayloadAction<IGetCafeByIdRes>) => {
            state.cafe = action.payload
        })
        builder.addMatcher(isFulfilled, (state) => {
            state.isLoading = false;
            state.errors = [];
        })
        builder.addMatcher(isPending, state => {
            state.isLoading = true;
            state.errors = [];
        })
        builder.addMatcher(isRejected, (state, action: PayloadAction<IError>) => {
            state.isLoading = false;
            state.errors.push(action.payload);
        })
    }
})

const cafesReducer = CafesSlice.reducer
const {setIsLoading} = CafesSlice.actions

export {cafesReducer, setIsLoading}


