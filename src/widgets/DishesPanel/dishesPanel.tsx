import { DishesPaginationControl, SearchDishesPanel } from "@features/ui";
import { DishList } from "@entities/Dish/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import styles from "./dishesPanel.module.scss";
import { NoResultsFound } from "@shared/ui";
import { CafeInfo, CafeLogo } from "@entities/Cafe/ui";
import { Desktop, Mobile } from "@shared/hoc";
import { IDishesPanelProps } from "./dishesPanel.props";

export default function DishesPanel({ className = "" }: IDishesPanelProps) {
	const currentCafe = useSelector(selectors.currentCafe);

	const currentDishes = useSelector(selectors.currentDishes);

	return (
		<section className={[styles.default, className].join(" ")}>
			<div className={styles.searchContainer}>
				<SearchDishesPanel className={styles.search} />
				{currentCafe && (
					<Desktop>
						<CafeLogo {...currentCafe} width={90} />
					</Desktop>
				)}
			</div>
			{currentDishes && (
				<>
					{!!currentDishes.dishes.length && currentCafe && (
						<>
							<Mobile>
								<CafeInfo {...currentCafe} />
							</Mobile>
							<DishList className={styles.dishList} />
							<DishesPaginationControl />
						</>
					)}
					{!currentDishes.dishes.length && (
						<NoResultsFound
							label="Блюд пока нет..."
							className={styles.notFound}
						/>
					)}
				</>
			)}
		</section>
	);
}
