import { useAppDispatch } from "@app/index";
import { IDishParams } from "@app/types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "@entities/Dish";

function useDishLoader() {
	const { dishId } = useParams<keyof IDishParams>() as IDishParams;
	const dispatch = useAppDispatch();

	useEffect(() => {
		async function getDishById() {
			dispatch(actions.setIsLoading(true));
			await dispatch(actions.getDishById({ dishId }));
			dispatch(actions.setIsLoading(false));
		}

		getDishById();
	}, [dishId, dispatch]);
}

export { useDishLoader };
