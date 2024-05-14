import { IDishInfoProps } from "./dishInfo.props";
import styles from "./dishInfo.module.scss";
import { Image } from "@shared/ui";
import DishInfoSection from "../DishInfoSection";
import { INutritionalValue } from "@entities/Dish/types/dish";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";

const TranslatedCBZHU = {
	calories: "Калории",
	fats: "Жиры",
	proteins: "Белки",
	carbohydrates: "Углеводы",
} as const;

export default function DishInfo({ className = "" }: IDishInfoProps) {
	const dish = useSelector(selectors.dish);

	return (
		<>
			{dish && (
				<article className={[styles.default, className].join(" ")}>
					<Image
						width={544}
						height={240}
						className={styles.image}
						src={dish.img}
					/>
					<div className={styles.info}>
						<DishInfoSection label="Описание">
							<span>{dish.description}</span>
						</DishInfoSection>
						<DishInfoSection label="Состав">
							<ol>
								{dish.ingredients.map((ingredient, idx) => {
									return <li key={idx}>{ingredient}</li>;
								})}
							</ol>
						</DishInfoSection>
						<DishInfoSection label="Энергетическая ценность">
							<ul>
								{Object.entries(dish.nutritionalValue).map(
									([name, val], idx) => {
										return (
											<li
												key={idx}
											>{`${TranslatedCBZHU[name as keyof INutritionalValue]}: ${val}`}</li>
										);
									},
								)}
							</ul>
						</DishInfoSection>
						<DishInfoSection label="Аллергены">
							<ol>
								{dish.allergens.map((allergen, idx) => {
									return <li key={idx}>{allergen}</li>;
								})}
							</ol>
						</DishInfoSection>
						<DishInfoSection label="Количество">
							<span>{`${dish.amount} ${dish.unit}.`}</span>
						</DishInfoSection>
					</div>
				</article>
			)}
		</>
	);
}
