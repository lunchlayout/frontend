import { selectors } from "@entities/Cafe";
import { SEO } from "@shared/ui";
import { DishesPanel } from "@widgets/index";
import { useSelector } from "react-redux";
import { Desktop } from "@shared/hoc";
import { useCafeLoader } from "@entities/Cafe/hook";
import styles from "./dishesPage.module.scss";

export default function DishesPage() {
	useCafeLoader();
	const currentCafe = useSelector(selectors.currentCafe);

	return (
		<>
			{currentCafe && (
				<main className={styles.main}>
					<div className={styles.content}>
						<Desktop>
							<span className={styles.title}>
								{currentCafe.name}
							</span>
						</Desktop>
						<DishesPanel className={styles.dishesPanel} />
						<SEO title={`${currentCafe.name} — Lunch Layout`} />
					</div>
				</main>
			)}
		</>
	);
}
