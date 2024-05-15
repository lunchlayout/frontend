import {
	DishesNotFound,
	DishesPaginationControl,
	SearchDishesPanel,
} from "@features/ui";
import { DishList } from "@entities/Dish/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import styles from "./dishesPanel.module.scss";

export default function DishesPanel() {
	const dishes = useSelector(selectors.dishes);

	return (
		<section className={styles.default}>
			<SearchDishesPanel />
			{dishes && (
				<>
					{!!dishes.length && (
						<>
							<DishList className={styles.dishList} />
							<DishesPaginationControl />
						</>
					)}
					{!dishes.length && (
						<DishesNotFound className={styles.notFound} />
					)}
				</>
			)}
		</section>
	);
}
