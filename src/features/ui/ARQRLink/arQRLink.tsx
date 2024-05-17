import { IARQRLinkProps } from "./arQRLink.props";
import { useParams } from "react-router-dom";
import { IDishParams } from "@app/types";
import { QRLink } from "@shared/ui";
import { getDishPathById } from "@entities/Dish/lib";
import { getOriginURL } from "@shared/lib";

export default function ARQRLink({ className = "" }: IARQRLinkProps) {
	const { dishId } = useParams<keyof IDishParams>() as IDishParams;
	const originURL = getOriginURL({
		host: import.meta.env.VITE_CLIENT_HOST,
		port: import.meta.env.VITE_CLIENT_PORT,
		protocol: import.meta.env.VITE_CLIENT_PROTOCOL,
	});
	return (
		<QRLink
			className={className}
			src={`${originURL}${getDishPathById(dishId)}/model`}
			label="Отсканируйте QR код для просмотра блюда в AR на мобильном устройстве."
		/>
	);
}
