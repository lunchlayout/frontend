import { ReviewLink } from "@entities/Review/ui";
import styles from "./mobileDishEntMain.module.scss";

import { EntertainmentSlider } from "@entities/Dish/ui";
import { IMobileDishEntMainProps } from "./mobileDishEntMain.props";

export default function MobileDishEntMain({
	className = "",
}: IMobileDishEntMainProps) {
	return (
		<main className={[styles.default, className].join(" ")}>
			<div className={styles.content}>
				<EntertainmentSlider />
				<ReviewLink className={styles.reviewLink} type="secondary" />
			</div>
		</main>
	);
}
