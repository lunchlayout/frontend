import { BASE_URL } from "../consts";

function getDishPathById(dishId: string) {
	return `${BASE_URL}/${dishId}`;
}

export { getDishPathById };
