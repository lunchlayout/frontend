import { IDishParams } from "@app/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectors } from "..";

/**
 * Отслеживание перехода к новому блюду
 * @returns
 */
function useIsSameDish() {
	const { dishId: dishIdParam } = useParams<keyof IDishParams>();
	const dishId = useSelector(selectors.dishId);
	return dishId === dishIdParam;
}

export { useIsSameDish };
