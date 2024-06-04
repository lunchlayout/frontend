import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetCafesReq, IGetCafesRes } from "../../types";
import { api } from "../..";

const getCafes = createAsyncThunk<
	IGetCafesRes,
	IGetCafesReq | undefined,
	{ rejectValue: Error }
>("cafes/getCafes", async (req, { rejectWithValue }) => {
	try {
		const res = await api.getCafes(req);
		return res;
	} catch (error) {
		throw rejectWithValue(error as Error);
	}
});

export { getCafes };
