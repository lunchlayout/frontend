import { ReviewForm } from "@widgets/index";
import styles from "./sendingPage.module.scss";
import { Helmet } from "react-helmet";

export default function SendingPage() {
	return (
		<main className={styles.default}>
			<div className={styles.container}>
				<ReviewForm />
			</div>
			<Helmet
				title={`Обратная связь — Lunch Layout`}
				meta={[
					{
						name: "description",
						content: "Страница отправки отзыва о приложении",
					},
				]}
			/>
		</main>
	);
}
