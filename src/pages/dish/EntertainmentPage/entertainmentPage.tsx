import { selectors } from "@entities/Dish";
import { SEO } from "@shared/ui";
import { DishEntertainmentPanel } from "@widgets/index";
import { useSelector } from "react-redux";
import styles from "./entertainmentPage.module.scss";
export default function EntertainmentPage() {
	const dish = useSelector(selectors.dish);
	return (
		<>
			<main className={styles.default}>
				<div className={styles.container}>
					<DishEntertainmentPanel />
				</div>
			</main>
			{dish && <SEO title={`${dish.name} — Lunch Layout`} />}
		</>
	);
}
