import { SEO } from "@shared/ui";
import { NotFoundPageContent } from "@widgets/index";
import styles from "./notFoundPage.module.scss";

export default function NotFoundPage() {
	return (
		<main className={styles.default}>
			<NotFoundPageContent />
			<SEO title={`Страница не найдена — Lunch Layout`} />
		</main>
	);
}
