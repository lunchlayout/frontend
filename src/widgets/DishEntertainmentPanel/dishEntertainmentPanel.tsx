import styles from "./dishEntertainmentPanel.module.scss";

import { useSelector } from "react-redux";

import { selectors } from "@entities/Dish";
import { EntertainmentSlider } from "@entities/Dish/ui";
import { Title } from "@shared/ui";
import { IDishEntertainmentPanelProps } from "./dishEntertainmentPanel.props";

export default function DishEntertainmentPanel({
	className = "",
}: IDishEntertainmentPanelProps) {
	const dish = useSelector(selectors.dish);

	return (
		<section className={[styles.default, className].join(" ")}>
			<div className={styles.titleContainer}>
				{dish && (
					<Title className={styles.title} level={1}>
						{dish.name}
					</Title>
				)}
			</div>
			<EntertainmentSlider />
		</section>
	);
}
