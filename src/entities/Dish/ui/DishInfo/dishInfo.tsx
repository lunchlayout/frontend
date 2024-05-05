import { IDishInfoProps } from "./dishInfo.props";
import styles from "./dishInfo.module.scss";
import { Image } from "@shared/ui";
import DishInfoSection from "../DishInfoSection";
import { INutritionalValue } from "@entities/Dish/types/dish";

const TranslatedCBZHU = {
	calories: "Калории",
	fats: "Жиры",
	proteins: "Белки",
	carbohydrates: "Углеводы",
} as const;

export default function DishInfo({
	description,
	img,
	amount,
	unit,
	allergens,
	ingredients,
	nutritionalValue,
	className = "",
}: IDishInfoProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<Image
				width={544}
				height={240}
				className={styles.image}
				src={img}
			/>
			<div className={styles.info}>
				<DishInfoSection label="Описание">
					<span>{description}</span>
				</DishInfoSection>
				<DishInfoSection label="Состав">
					<ol>
						{ingredients.map(ingredient => {
							return <li>{ingredient}</li>;
						})}
					</ol>
				</DishInfoSection>
				<DishInfoSection label="Энергетическая ценность">
					<ul>
						{Object.entries(nutritionalValue).map(([name, val]) => {
							return (
								<li>{`${TranslatedCBZHU[name as keyof INutritionalValue]}: ${val}`}</li>
							);
						})}
					</ul>
				</DishInfoSection>
				<DishInfoSection label="Аллергены">
					<ol>
						{allergens.map(allergen => {
							return <li>{allergen}</li>;
						})}
					</ol>
				</DishInfoSection>
				<DishInfoSection label="Количество">
					<span>{`${amount} ${unit}.`}</span>
				</DishInfoSection>
			</div>
		</article>
	);
}
