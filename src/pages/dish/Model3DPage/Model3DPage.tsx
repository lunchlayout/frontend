import { selectors } from "@entities/Dish";
import { SEO } from "@shared/ui";
import Dish3DCanvas from "@widgets/Dish3DCanvas";
import { useSelector } from "react-redux";
import { IModel3DPageProps } from "./model3DPage.props";
import styles from "./model3DPage.module.scss";

export default function Model3DPage({ className = "" }: IModel3DPageProps) {
	const dish = useSelector(selectors.dish);
	const scene = useSelector(selectors.scene);
	return (
		<main className={[styles.default, className].join(" ")}>
			<div className={styles.content}>
				{scene && <Dish3DCanvas />}
				{dish && (
					<SEO title={`3D модель — ${dish.name} — Lunch Layout`} />
				)}
			</div>
		</main>
	);
}
