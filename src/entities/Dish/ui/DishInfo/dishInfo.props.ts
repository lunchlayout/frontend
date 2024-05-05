import { IDish } from "@entities/Dish/types";
import { IDefaultProps } from "@shared/types";

export interface IDishInfoProps
	extends IDefaultProps,
		Pick<
			IDish,
			| "description"
			| "img"
			| "amount"
			| "unit"
			| "allergens"
			| "ingredients"
			| "nutritionalValue"
		> {}
