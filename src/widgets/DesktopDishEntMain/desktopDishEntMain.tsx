import styles from "./desktopDishEntMain.module.scss";

import { useSelector } from "react-redux";

import { selectors } from "@entities/Dish";
import { EntertainmentSlider } from "@entities/Dish/ui";
import { Title } from "@shared/ui";
import { IDesktopDishEntMainProps } from "./desktopDishEntMain.props";

export default function DesktopDishEntMain({
	className = "",
}: IDesktopDishEntMainProps) {
	const dish = useSelector(selectors.dish);

	return (
		<main className={[styles.default, className].join(" ")}>
			<div className={styles.content}>
				{dish && (
					<Title className={styles.dishName} level={1}>
						{dish.name}
					</Title>
				)}
				<EntertainmentSlider />
			</div>
		</main>
	);
}
