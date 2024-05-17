import { IARQRLinkProps } from "./arQRLink.props";
import { useParams } from "react-router-dom";
import { IDishParams } from "@app/types";
import { QRLink } from "@shared/ui";
import { getDishPathById } from "@entities/Dish/lib";

export default function ARQRLink({ className = "" }: IARQRLinkProps) {
	const { dishId } = useParams<keyof IDishParams>() as IDishParams;
	return (
		<QRLink
			className={className}
			src={`${getDishPathById(dishId)}/ar`}
			label="Отсканируйте QR код для просмотра блюда в AR на мобильном устройстве."
		/>
	);
}
