import { IDishListProps } from "./dishList.props";
import styles from "./dishList.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import DishCard from "../DishCard";
import { Link } from "@shared/ui";

export default function DishList({ className = "" }: IDishListProps) {
	const dishes = useSelector(selectors.dishes);

	return (
		<ul className={[styles.default, className].join(" ")}>
			{dishes?.map(dish => {
				return (
					<Link
						className={styles.dishLink}
						key={dish.dishId}
						to={`/dishes/${dish.dishId}`}
					>
						<DishCard className={styles.dish} {...dish} />
					</Link>
				);
			})}
		</ul>
	);
}
