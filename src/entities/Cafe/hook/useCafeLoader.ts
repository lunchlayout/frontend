import { useEffect } from "react";
import { useAppDispatch } from "@app/index";
import { useParams } from "react-router-dom";
import { ICafeParams } from "@app/types";
import { actions } from "@entities/Cafe";

function useCafeLoader() {
	const dispatch = useAppDispatch();
	const { cafeId } = useParams<keyof ICafeParams>() as ICafeParams;

	useEffect(() => {
		async function getCafeById() {
			dispatch(actions.setIsLoading(true));
			await dispatch(actions.getCafeById({ cafeId }));
			dispatch(actions.setIsLoading(false));
		}
		getCafeById();
	}, [cafeId, dispatch]);
}

export { useCafeLoader };
