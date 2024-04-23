import { $api } from "../../../app/api";
import { BASE_URL } from "../consts";
import { IGetCafeByIdReq, IGetCafeByIdRes } from "../types";

async function getCafeById(req: IGetCafeByIdReq) {
    const cafe = await $api.get<IGetCafeByIdRes>(`${BASE_URL}`, {
        params: req
    })
    return cafe
}

export {getCafeById}