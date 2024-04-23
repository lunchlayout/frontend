import { $api } from "../../../app/api";
import { BASE_URL } from "../consts";
import { ISendReviewReq, ISendReviewRes } from "../types";

async function sendReview(req: ISendReviewReq) {
    const res = await $api.post<ISendReviewRes>(`${BASE_URL}`, req)
    return res
}

export {sendReview}