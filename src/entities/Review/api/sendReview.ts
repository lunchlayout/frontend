import { $api } from "@app/index";
import { BASE_URL } from "../consts";
import { ISendReviewReq, ISendReviewRes } from "../types";

async function sendReview(req: ISendReviewReq) {
	const res = await $api.post<ISendReviewRes>(`${BASE_URL}`, req);
	return res.headers.Location;
}

export { sendReview };
