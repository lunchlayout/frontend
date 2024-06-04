import { IDishListProps } from "./dishList.props";
import styles from "./dishList.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import DishCard from "../DishCard";
import { Link } from "@shared/ui";
import { getDishPathById } from "@entities/Dish/lib";

export default function DishList({ className = "" }: IDishListProps) {
	const currentDishes = useSelector(selectors.currentDishes);

	return (
		<ul className={[styles.default, className].join(" ")}>
			{currentDishes?.dishes.map(dish => {
				return (
					<li key={dish.dishId}>
						<Link
							type="outlined"
							className={styles.dishLink}
							to={getDishPathById(dish.dishId)}
						>
							<DishCard className={styles.dish} {...dish} />
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
