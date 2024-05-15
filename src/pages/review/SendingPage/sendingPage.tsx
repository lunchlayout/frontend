import { Desktop, Mobile } from "@shared/hoc";
import { SEO } from "@shared/ui";
import { ReviewForm } from "@widgets/index";
import styles from "./sendingPage.module.scss";

export default function SendingPage() {
	return (
		<main className={styles.main}>
			<Desktop>
				<ReviewForm hasControl />
			</Desktop>
			<Mobile>
				<ReviewForm />
			</Mobile>
			<SEO title={`Обратная связь — Lunch Layout`} />
		</main>
	);
}
