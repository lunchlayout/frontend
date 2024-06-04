import { $api } from "@app/index";
import { IGetCafesReq, IGetCafesRes } from "../types";
import { BASE_URL } from "../consts";
import { AxiosRequestConfig } from "axios";

async function getCafes(req?: IGetCafesReq) {
	let params: AxiosRequestConfig["params"];
	if (req) {
		params = {
			query: req.query,
			page: req.page && +req.page,
		};
	}
	const res = await $api.get<IGetCafesRes>(BASE_URL, {
		params,
	});
	return res.data;
}

export { getCafes };
