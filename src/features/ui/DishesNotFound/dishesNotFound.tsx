import { IDishesNotFoundProps } from "./dishesNotFound.props";
import styles from "./dishesNotFound.module.scss";
import { DishIcon } from "@entities/Dish/ui";

export default function DishesNotFound({
	className = "",
}: IDishesNotFoundProps) {
	return (
		<div className={[styles.default, className].join(" ")}>
			<DishIcon />
			<p>По вашему запросу ничего не нашлось</p>
		</div>
	);
}
