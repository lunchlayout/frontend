import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetDishByIdReq, IGetDishByIdRes } from "../../types";
import {api} from '../..'
import { doError, IError } from "../../../../shared/Error";


const getDishById = createAsyncThunk<IGetDishByIdRes, IGetDishByIdReq, {rejectValue: IError}>(
    'dishes/getDishById',
    async (req, {rejectWithValue}) => {
        try {
            const dish = await api.getDishById(req);
            return dish; 
        } catch (error) {
            throw rejectWithValue(doError(error as (Error | IError)));
        }
    }
)

export {getDishById}