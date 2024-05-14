import { IDishWithId } from "@entities/Dish/types";
import { ICafe } from "./cafe";

interface IDishGetCafeByIdRes
	extends Pick<IDishWithId, "dishId" | "name" | "img" | "amount" | "unit"> {}

interface IGetCafeByIdRes extends ICafe {
	pageCnt: number;
	dishes: IDishGetCafeByIdRes[];
}

export type { IGetCafeByIdRes, IDishGetCafeByIdRes };
