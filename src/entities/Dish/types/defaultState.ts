import { IDefaultState } from "@shared/types";
import { IDishWithCafe } from "@entities/Dish/types";
import { IProgress } from "@shared/ui/Progress";
import { IEntertainmentDetails } from "./entertainment";
import { Group, Object3DEventMap } from "three";

interface IDishesState extends IDefaultState {
	dish?: IDishWithCafe;
	scene?: Group<Object3DEventMap>;
	modelLoadingProgress?: IProgress;
	entertainmentDetails?: IEntertainmentDetails;
}

export type { IDishesState };
