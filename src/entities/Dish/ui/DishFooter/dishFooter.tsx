import { CafeLink } from "@entities/Cafe/ui";
import styles from "./dishFooter.module.scss";
import { Button } from "@shared/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { ModelLink } from "@features/ui";
import { useState } from "react";
import DishInfo from "../DishInfo";
import { Modal } from "@shared/ui";

export default function DishFooter() {
	const { cafeId, name } = useSelector(selectors.dish) as IDishWithCafeId;

	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => setShowModal(!showModal);

	const closeModal = () => setShowModal(false);

	return (
		<>
			<footer className={styles.default}>
				<CafeLink cafeId={cafeId} />
				<ModelLink className={styles.model} />
				<Button
					onClick={toggleModal}
					className={styles.info}
					customType="primary"
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 7 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.5 10C2.7574 10 2.0452 10.2634 1.5201 10.7322C0.995001 11.2011 0.700001 11.837
						0.700001 12.5V27.5C0.700001 28.163 0.995001 28.7989 1.5201 29.2678C2.0452 29.7366 2.7574
						30 3.5 30C4.24261 30 4.9548 29.7366 5.4799 29.2678C6.005 28.7989 6.3 28.163 6.3 27.5V12.5C6.3
						11.837 6.005 11.2011 5.4799 10.7322C4.9548 10.2634 4.24261 10 3.5 10ZM3.5 0C2.80777 0 2.13108
							0.183278 1.55551 0.526657C0.979934 0.870037 0.531331 1.35809 0.266424 1.92911C0.00151747
							2.50013 -0.0677955 3.12847 0.0672527 3.73466C0.202301 4.34085 0.535644 4.89767 1.02513
							5.33471C1.51461 5.77175 2.13825 6.06938 2.81718 6.18995C3.49612 6.31053 4.19985 6.24865
							4.83939 6.01212C5.47893 5.7756 6.02556 5.37506 6.41014 4.86116C6.79473 4.34725 7 3.74307
								7 3.125C7 2.2962 6.63125 1.50134 5.97487 0.915291C5.3185 0.32924 4.42826 0 3.5 0Z"
						/>
					</svg>
				</Button>
			</footer>
			<Modal
				container={document.getElementById("root")!}
				open={showModal}
				label={`${name} - основная информация`}
				onClose={closeModal}
			>
				<DishInfo />
			</Modal>
		</>
	);
}
