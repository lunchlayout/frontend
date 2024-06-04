import { selectors } from "@entities/Dish";
import { DishEntertainmentPanel } from "@widgets/index";
import { useSelector } from "react-redux";
import styles from "./entertainmentPage.module.scss";
import { Helmet } from "react-helmet";
export default function EntertainmentPage() {
	const dish = useSelector(selectors.dish);
	return (
		<>
			<main className={styles.default}>
				<div className={styles.container}>
					<DishEntertainmentPanel />
				</div>
			</main>
			{dish && (
				<Helmet
					title={`${dish.name} — Lunch Layout`}
					meta={[
						{
							name: "description",
							content: "Главная страница блюда",
						},
					]}
				/>
			)}
		</>
	);
}
