import { $api } from "../../../app";
import { BASE_URL } from "../consts";
import { IGetCafeByIdReq, IGetCafeByIdRes } from "../types";


async function getCafeById(req: IGetCafeByIdReq) {
    const cafe = await $api.get<IGetCafeByIdRes>(`${BASE_URL}/${req.cafeId}`, {
        params: {
            query: req.query,
            page: req.page
        }
    })
    return cafe.data
}

export {getCafeById}