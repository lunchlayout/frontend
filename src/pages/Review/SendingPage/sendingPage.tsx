import { SEO } from "@shared/ui";
import { ReviewForm } from "@widgets/index";
import styles from "./sendingPage.module.scss";

export default function SendingPage() {
	return (
		<main className={styles.default}>
			<div className={styles.container}>
				<ReviewForm />
			</div>
			<SEO title={`Обратная связь — Lunch Layout`} />
		</main>
	);
}
