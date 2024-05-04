import { IDishWithId } from "../../Dish/types";
import { ICafe } from "./cafe";

interface IGetCafeByIdRes extends ICafe {
    pageCnt: number,
    dishes: Pick<IDishWithId, 'dishId' | 'name' | 'img' | 'amount' | 'unit'>[]
}

export type {IGetCafeByIdRes}