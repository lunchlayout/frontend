import { IContent, IDishWithCafeId } from "../../Dish/types";

interface IGetDishByIdRes extends IDishWithCafeId {
	content: IContent;
}

export type { IGetDishByIdRes };
