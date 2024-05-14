import { IARQRLinkProps } from "./arQRLink.props";
import { useParams } from "react-router-dom";
import { IDishParams } from "@app/types";
import { QRLink } from "@shared/ui";

export default function ARQRLink({ className = "" }: IARQRLinkProps) {
	const { dishId } = useParams<keyof IDishParams>() as IDishParams;
	return (
		<QRLink
			className={className}
			src={`/dishes/${dishId}/ar`}
			label="Отсканируйте QR код для просмотра блюда в AR"
		/>
	);
}
