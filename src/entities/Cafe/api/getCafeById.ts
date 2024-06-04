import { $api } from "@app/index";
import { IGetCafeByIdReq, IGetCafeByIdRes } from "../types";
import { getCafePathById } from "../lib";

async function getCafeById(req: IGetCafeByIdReq) {
	const res = await $api.get<IGetCafeByIdRes>(getCafePathById(req.cafeId), {
		params: {
			query: req.query,
			page: req.page && +req.page,
		},
	});
	return res.data;
}

export { getCafeById };
