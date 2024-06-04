import { useEffect } from "react";
import { useAppDispatch } from "@app/index";
import { actions } from "@entities/Cafe";

function useCafesLoader() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		async function getCafeById() {
			dispatch(actions.setIsLoading(true));
			await dispatch(actions.getCafes());
			dispatch(actions.setIsLoading(false));
		}
		getCafeById();
	}, [dispatch]);
}

export { useCafesLoader };
