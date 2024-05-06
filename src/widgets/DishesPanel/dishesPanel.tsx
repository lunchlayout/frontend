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
	const pageCnt = useSelector(selectors.pageCnt);
	return (
		<section className={styles.default}>
			<SearchDishesPanel />
			{!!pageCnt && (
				<>
					<DishList />
					<DishesPaginationControl />
				</>
			)}
			{!pageCnt && <DishesNotFound />}
		</section>
	);
}
