import { useAppDispatch } from "@app/index";
import { IDishParams } from "@app/types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions, selectors } from "@entities/Dish";
import { useSelector } from "react-redux";

function useDishLoader() {
	const { dishId: dishIdParam } = useParams<keyof IDishParams>();
	const dishId = useSelector(selectors.dishId);
	const dispatch = useAppDispatch();

	useEffect(() => {
		async function getDishById() {
			if (dishIdParam !== dishId && dishIdParam) {
				dispatch(actions.setIsLoading(true));
				await dispatch(actions.getDishById({ dishId: dishIdParam }));
				dispatch(actions.setIsLoading(false));
			}
		}
		getDishById();
	}, [dishId, dispatch, dishIdParam]);
}

export { useDishLoader };
