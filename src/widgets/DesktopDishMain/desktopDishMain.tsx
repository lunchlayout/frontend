import styles from "./desktopDishMain.module.scss";

import { useSelector } from "react-redux";

import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { EntertainmentSlider } from "@entities/Dish/ui";
import { Title } from "@shared/ui";
import { DesktopDishControl } from "..";

export default function DesktopDishMain() {
	const { name } = useSelector(selectors.dish) as IDishWithCafeId;

	return (
		<main className={styles.default}>
			<Title className={styles.dishName} level={1}>
				{name}
			</Title>
			<EntertainmentSlider />
			<DesktopDishControl />
		</main>
	);
}
