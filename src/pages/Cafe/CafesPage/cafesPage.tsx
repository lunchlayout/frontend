import { SEO } from "@shared/ui";
import { CafesPanel } from "@widgets/index";
import styles from "./cafesPage.module.scss";
import { Desktop } from "@shared/hoc";
import { useCafesLoader } from "@entities/Cafe/hook";

export default function CafesPage() {
	useCafesLoader();

	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<Desktop>
					<span className={styles.title}>Рестораны</span>
				</Desktop>
				<CafesPanel className={styles.cafesPanel} />
				<SEO title={`Рестораны — Lunch Layout`} />
			</div>
		</main>
	);
}
