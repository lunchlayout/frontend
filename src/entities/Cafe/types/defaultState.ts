import { IDefaultState } from "@shared/types";
import { IDishWithId } from "@entities/Dish/types";
import { ICafe } from "./cafe";

interface ICafesState extends IDefaultState {
	cafe?: ICafe & {
		dishes: Pick<
			IDishWithId,
			"dishId" | "name" | "img" | "amount" | "unit"
		>[];
	};
	pageCnt: number;
	currentPage: number;
}

export type { ICafesState };
