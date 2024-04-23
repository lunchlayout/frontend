import { $api } from "../../../app/api";
import { BASE_URL } from "../consts";
import { IGetDishByIdReq, IGetDishByIdRes } from "../types";

async function getDishById(req: IGetDishByIdReq) {
    const dish = await $api.get<IGetDishByIdRes>(`${BASE_URL}/${req.dishId}`)
    return dish
}

export {getDishById}