import { CafesPanel } from "@widgets/index";
import styles from "./cafesPage.module.scss";
import { Desktop } from "@shared/hoc";
import { useCafesLoader } from "@entities/Cafe/hook";
import { Helmet } from "react-helmet";

export default function CafesPage() {
	useCafesLoader();

	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<Desktop>
					<span className={styles.title}>Рестораны</span>
				</Desktop>
				<CafesPanel className={styles.cafesPanel} />
				<Helmet
					title={`Рестораны — Lunch Layout`}
					meta={[
						{
							name: "description",
							content: "Страница заведений партнеров приложения",
						},
					]}
				/>
			</div>
		</main>
	);
}
