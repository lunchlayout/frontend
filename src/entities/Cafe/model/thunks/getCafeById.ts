import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetCafeByIdReq, IGetCafeByIdRes } from "../../types";
import {api} from '../../'
import { doError, IError } from "../../../../shared/Error";


const getCafeById = createAsyncThunk<IGetCafeByIdRes, IGetCafeByIdReq, {rejectValue: IError}>(
    'cafes/getCafeById',
    async (req, {rejectWithValue}) => {
        try {
            const cafe = await api.getCafeById(req);
            return cafe; 
        } catch (error) {
            throw rejectWithValue(doError(error as (Error | IError)));
        }
    }
)

export {getCafeById}