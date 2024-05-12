import { ReviewLink } from "@entities/Review/ui";
import styles from "./mobileDishMain.module.scss";

import { EntertainmentSlider } from "@entities/Dish/ui";

export default function MobileDishMain() {
	return (
		<main className={styles.default}>
			<ReviewLink className={styles.reviewLink} type="secondary" />
			<EntertainmentSlider />
		</main>
	);
}
