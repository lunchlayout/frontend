import { $api } from "@app/index";
import { IGetDishByIdReq, IGetDishByIdRes } from "../types";
import { getDishPathById } from "../lib";

async function getDishById(req: IGetDishByIdReq) {
	const dish = await $api.get<IGetDishByIdRes>(getDishPathById(req.dishId));
	return dish.data;
}

export { getDishById };
