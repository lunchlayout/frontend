import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetCafeByIdReq, IGetCafeByIdRes } from "../../types";
import {api} from '../../'

const getCafeById = createAsyncThunk<IGetCafeByIdRes, IGetCafeByIdReq, {rejectValue: Error}>(
    'cafes/getCafeById',
    async (req, {rejectWithValue}) => {
        try {
            const cafe = await api.getCafeById(req);
            return cafe; 
        } catch (error) {
            throw rejectWithValue(error as Error);
        }
    }
)

export {getCafeById}