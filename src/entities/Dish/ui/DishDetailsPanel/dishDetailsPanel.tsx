import { IDishDetailsPanelProps } from "./dishDetailsPanel.props";
import styles from "./dishDetailsPanel.module.scss";

import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { INutritionalValue } from "@entities/Dish/types/dish";

const NutritionalValueRu: Record<keyof INutritionalValue, string> = {
	calories: "Калории",
	fats: "Жиры",
	proteins: "Белки",
	carbohydrates: "Углеводы",
} as const;

export default function DishDetailsPanel({
	className = "",
}: IDishDetailsPanelProps) {
	const dish = useSelector(selectors.dish);

	return (
		<>
			{dish && (
				<div className={[styles.default, className].join(" ")}>
					<div className={styles.ingredients}>
						<span className={styles.title}>Состав</span>
						<ol className={styles.list}>
							{dish.ingredients.map((ingredient, idx) => {
								return <li key={idx}>{ingredient}</li>;
							})}
						</ol>
					</div>

					<div className={styles.allergens}>
						<span className={styles.title}>Аллергены</span>
						<ol className={styles.list}>
							{dish.allergens.map((allergen, idx) => {
								return <li key={idx}>{allergen}</li>;
							})}
						</ol>
					</div>
					<div className={styles.nutritionalValue}>
						<span className={styles.title}>
							Энергетическая ценность
						</span>
						<ol className={styles.list}>
							{Object.entries(dish.nutritionalValue).map(
								([name, val], idx) => {
									return (
										<li
											key={idx}
										>{`${NutritionalValueRu[name as keyof INutritionalValue]}: ${val}`}</li>
									);
								},
							)}
						</ol>
					</div>
				</div>
			)}
		</>
	);
}
