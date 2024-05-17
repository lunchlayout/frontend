import { selectors } from "@entities/Cafe";
import { SEO } from "@shared/ui";
import { DishesPanel } from "@widgets/index";
import { useSelector } from "react-redux";
import styles from "./dishesPage.module.scss";

export default function DishesPage() {
	const cafe = useSelector(selectors.сafe);

	return (
		<>
			{cafe && (
				<main className={styles.main}>
					<div className={styles.content}>
						<DishesPanel />
						<SEO title={`${cafe.name} — Lunch Layout`} />
					</div>
				</main>
			)}
		</>
	);
}
