import { selectors } from "@entities/Dish";
import { SEO } from "@shared/ui";
import { useSelector } from "react-redux";
import { IModelARPageProps } from "./modelARPage.props";
import styles from "./modelARPage.module.scss";
import DishARCanvas from "@widgets/DishARCanvas";

export default function ModelARPage({ className = "" }: IModelARPageProps) {
	const dish = useSelector(selectors.dish);
	const scene = useSelector(selectors.scene);
	return (
		<main className={[styles.default, className].join(" ")}>
			<div className={styles.content}>
				{scene && <DishARCanvas />}
				{dish && (
					<SEO title={`3D модель — ${dish.name} — Lunch Layout`} />
				)}
			</div>
		</main>
	);
}
