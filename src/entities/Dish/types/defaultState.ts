import { IDefaultState } from "../../../shared/types";
import { IDishWithCafeId } from "../../Dish/types";

interface IDishesState extends IDefaultState {
	dish?: IDishWithCafeId;
}

export type { IDishesState };
