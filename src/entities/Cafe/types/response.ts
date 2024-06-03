import { IDishWithId } from "@entities/Dish/types";
import { ICafe, ICafeWithId } from "./cafe";

interface IDishGetCafeByIdRes
	extends Pick<
		IDishWithId,
		"dishId" | "name" | "img" | "amount" | "unit" | "description"
	> {}

interface IGetCafeByIdRes extends ICafe {
	pageCnt: number;
	dishes: IDishGetCafeByIdRes[];
}

interface IGetCafesRes {
	pageCnt: number;
	cafes: ICafeWithId[];
}

export type { IGetCafeByIdRes, IDishGetCafeByIdRes, IGetCafesRes };
