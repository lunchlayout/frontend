import { IDefaultState } from "@shared/types";
import { IDishWithCafe } from "@entities/Dish/types";
import { IProgress } from "@shared/ui/Progress";
import { IEntertainmentDetails } from "./entertainment";

interface IDishesState extends IDefaultState {
	dish?: IDishWithCafe;
	modelLoadingProgress?: IProgress;
	entertainmentDetails?: IEntertainmentDetails;
}

export type { IDishesState };
