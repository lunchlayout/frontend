import { SEO, Image } from "@shared/ui";
import { BenefitPanel, SearchPanelByDishId } from "@widgets/index";
import styles from "./mainPage.module.scss";

export default function MainPage() {
	return (
		<>
			<main className={styles.default}>
				<SearchPanelByDishId className={styles.searchById} />
				<Image src="/images/entryGirl.png" className={styles.image} />
				<BenefitPanel className={styles.benefits} />
			</main>
			<SEO title={`Главная — Lunch Layout`} />
		</>
	);
}
