import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetDishByIdReq, IGetDishByIdRes } from "../../types";
import {api} from '../..'


const getDishById = createAsyncThunk<IGetDishByIdRes, IGetDishByIdReq, {rejectValue: Error}>(
    'dishes/getDishById',
    async (req, {rejectWithValue}) => {
        try {
            const dish = await api.getDishById(req);
            return dish; 
        } catch (error) {
            throw rejectWithValue(error as Error);
        }
    }
)

export {getDishById}