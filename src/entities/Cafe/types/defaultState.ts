import { IDefaultState } from "../../../shared/types";
import { IDishWithId } from "../../Dish/types";

interface ICafesState extends IDefaultState {
    cafe?: {
        name: string,
        logo: string
        dishes: Pick<IDishWithId, 'dishId' | 'name' | 'img' | 'amount' | 'unit'>[]
    },    
}

export type {ICafesState}