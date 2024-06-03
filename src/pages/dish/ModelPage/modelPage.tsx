import { selectors } from "@entities/Dish";
import { SEO } from "@shared/ui";
import Dish3DCanvas from "@widgets/Dish3DCanvas";
import { useSelector } from "react-redux";
import { IModelPageProps } from "./modelPage.props";
import styles from "./modelPage.module.scss";

export default function ModelPage({ className = "" }: IModelPageProps) {
	const dish = useSelector(selectors.dish);
	const scene = useSelector(selectors.scene);

	return (
		<main className={[styles.default, className].join(" ")}>
			<div className={styles.content}>
				{scene && <Dish3DCanvas />}
				{dish && <SEO title={`Модель — ${dish.name} — Lunch Layout`} />}
			</div>
		</main>
	);
}
