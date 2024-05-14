import { IDefaultState } from "@shared/types";
import { IGetCafeByIdRes } from "./response";

interface ICafesState extends IDefaultState {
	cafe?: Omit<IGetCafeByIdRes, "pageCnt">;
	pageCnt?: number;
}

export type { ICafesState };
