import { useAppDispatch } from "@app/index";
import { actions } from "@entities/Dish";
import { getDishPathById } from "@entities/Dish/lib";
import { QRReader } from "@shared/ui";
import { useNavigate } from "react-router-dom";

export default function DishIdQRReader() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	async function handleSuccess(decodedText: string) {
		const res = await dispatch(
			actions.getDishById({ dishId: decodedText }),
		);
		if (res.meta.requestStatus === "fulfilled") {
			return navigate(getDishPathById(decodedText));
		}
	}

	function handleError(errorMessage: string) {
		console.log(errorMessage);
	}

	return (
		<section>
			<QRReader onSuccess={handleSuccess} onError={handleError} />
		</section>
	);
}
