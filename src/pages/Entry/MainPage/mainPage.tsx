import { Image } from "@shared/ui";
import { BenefitPanel, SearchPanelByDishId } from "@widgets/index";
import styles from "./mainPage.module.scss";
import { Helmet } from "react-helmet";

export default function MainPage() {
	return (
		<>
			<main className={styles.default}>
				<SearchPanelByDishId className={styles.searchById} />
				<Image
					src="/images/entryGirl.png"
					className={styles.image}
					alt=""
				/>
				<BenefitPanel className={styles.benefits} />
			</main>
			<Helmet
				title={`Главная — Lunch Layout`}
				meta={[
					{
						name: "description",
						content: "Главная страница",
					},
				]}
			/>
		</>
	);
}
