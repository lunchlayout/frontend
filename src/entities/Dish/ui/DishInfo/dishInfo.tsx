import { IDishInfoProps } from "./dishInfo.props";
import styles from "./dishInfo.module.scss";
import { Image } from "@shared/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import DishDetailsPanel from "../DishDetailsPanel";
import { CafeLogo } from "@entities/Cafe/ui";

export default function DishInfo({ className = "" }: IDishInfoProps) {
	const dish = useSelector(selectors.dish);
	const dishCafe = useSelector(selectors.dishCafe);

	return (
		<>
			{dish && (
				<article className={[styles.default, className].join(" ")}>
					<Image
						className={styles.image}
						src={dish.img}
						alt={`${dish.name} - фотография блюда`}
					/>
					<div className={styles.main}>
						<div className={styles.title}>
							{dishCafe && (
								<CafeLogo
									{...dishCafe}
									width={90}
									className={styles.logo}
								/>
							)}
							<span className={styles.name}>{dish.name}</span>
							<span
								className={styles.amount}
							>{`${dish.amount} ${dish.unit}`}</span>
						</div>
						<DishDetailsPanel />
					</div>
				</article>
			)}
		</>
	);
}
