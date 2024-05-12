import { useAppDispatch } from "@app/index";
import { actions } from "@entities/Dish";
import { BASE_URL } from "@entities/Dish/consts";
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
			return navigate(`${BASE_URL}/${decodedText}`);
		}
	}

	function handleError(errorMessage: string) {
		console.log(errorMessage);
	}

	return <QRReader onSuccess={handleSuccess} onError={handleError} />;
}
