import { Modal } from "@shared/ui";
import { DishInfo } from "@entities/Dish/ui";
import { APP_ROOT } from "@app/consts";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IDishInfoModalProps } from "./dishInfoModal.props";

export default function DishInfoModal(props: IDishInfoModalProps) {
	const dish = useSelector(selectors.dish);

	return (
		<>
			{dish && (
				<Modal
					container={APP_ROOT!}
					label={`${dish.name} - основная информация`}
					{...props}
				>
					<DishInfo />
				</Modal>
			)}
		</>
	);
}
