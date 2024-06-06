import { useAppDispatch } from "@app/index";
import { IDishParams } from "@app/types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "@entities/Dish";
import { useIsSameDish } from "./useIsSameDish";

function useDishLoader() {
	const { dishId } = useParams<keyof IDishParams>();
	const dispatch = useAppDispatch();

	const isSameDish = useIsSameDish();

	useEffect(() => {
		async function getDishById() {
			if (!isSameDish && dishId) {
				dispatch(actions.setIsLoading(true));
				await dispatch(actions.getDishById({ dishId }));
				dispatch(actions.setIsLoading(false));
			}
		}
		getDishById();
	}, [dispatch, isSameDish, dishId]);
}

export { useDishLoader };
