import { IDishWithId } from "../../Dish/types";
import { ICafe } from "./cafe";

interface IGetCafeByIdRes extends ICafe {
    dishes: Pick<IDishWithId, 'dishId' | 'name' | 'img' | 'amount' | 'unit'>[]
}

export type {IGetCafeByIdRes}