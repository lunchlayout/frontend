import { useAppDispatch } from "@app/index";
import { IDishParams } from "@app/types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions, selectors } from "@entities/Dish";
import { useSelector } from "react-redux";

function useDishLoader() {
	const { dishId } = useParams<keyof IDishParams>() as IDishParams;
	const dish = useSelector(selectors.dish);
	const dispatch = useAppDispatch();

	useEffect(() => {
		async function getDishById() {
			if (!dish) {
				dispatch(actions.setIsLoading(true));
				await dispatch(actions.getDishById({ dishId }));
				dispatch(actions.setIsLoading(false));
			}
		}
		getDishById();
	}, [dishId, dispatch, dish]);
}

export { useDishLoader };
