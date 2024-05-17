import { Desktop, Mobile } from "@shared/hoc";
import { SEO } from "@shared/ui";
import { ReviewForm } from "@widgets/index";
import styles from "./sendingPage.module.scss";

export default function SendingPage() {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<Desktop>
					<ReviewForm hasControl />
				</Desktop>
				<Mobile>
					<ReviewForm />
				</Mobile>
			</div>
			<SEO title={`Обратная связь — Lunch Layout`} />
		</main>
	);
}
