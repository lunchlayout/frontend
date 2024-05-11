import { Modal } from "@shared/ui";
import { DishInfo } from "@entities/Dish/ui";
import { APP_ROOT } from "@app/consts";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { IDishInfoModalProps } from "./dishInfoModal.props";

export default function DishInfoModal(props: IDishInfoModalProps) {
	const { name } = useSelector(selectors.dish) as IDishWithCafeId;

	return (
		<Modal
			container={APP_ROOT!}
			label={`${name} - основная информация`}
			{...props}
		>
			<DishInfo />
		</Modal>
	);
}
