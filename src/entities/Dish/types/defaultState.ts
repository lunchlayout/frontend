import { IDefaultState } from "@shared/types";
import { IDishWithCafeId } from "../../Dish/types";
import { IProgress } from "@shared/ui/Progress";

interface IDishesState extends IDefaultState {
	dish?: IDishWithCafeId;
	modelLoadingProgress?: IProgress;
}

export type { IDishesState };
