import { IDefaultState } from "@shared/types";
import { IGetCafeByIdRes, IGetCafesRes } from "./response";

interface ICafesState extends IDefaultState {
	currentCafe?: IGetCafeByIdRes;
	currentCafes?: IGetCafesRes;
}

export type { ICafesState };
