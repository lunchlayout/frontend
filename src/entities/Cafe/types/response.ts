import { IDishWithId } from "../../Dish/types";
import { ICafe } from "./cafe";

interface IGetCafeByIdRes {
    cafe: ICafe,
    dishes: Pick<IDishWithId, 'dishId' | 'name' | 'img' | 'amount' | 'unit'>[]
}

export type {IGetCafeByIdRes}