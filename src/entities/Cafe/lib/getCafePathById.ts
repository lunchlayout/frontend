import { BASE_URL } from "../consts";

function getCafePathById(cafeId: string) {
	return `${BASE_URL}/${cafeId}`;
}

export { getCafePathById };
