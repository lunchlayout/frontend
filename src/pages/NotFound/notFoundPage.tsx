import { SEO } from "@shared/ui";
import { NotFoundPageMain } from "@widgets/index";
import styles from "./notFoundPage.module.scss";

export default function NotFoundPage() {
	return (
		<>
			<NotFoundPageMain className={styles.main} />
			<SEO title={`Страница не найдена — Lunch Layout`} />
		</>
	);
}
