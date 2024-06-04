import { NotFoundPageContent } from "@widgets/index";
import styles from "./notFoundPage.module.scss";
import { Helmet } from "react-helmet";

export default function NotFoundPage() {
	return (
		<main className={styles.default}>
			<NotFoundPageContent />
			<Helmet
				title={`Страница не найдена — Lunch Layout`}
				meta={[
					{
						name: "description",
						content: "Страница не найдена",
					},
				]}
			/>
		</main>
	);
}
