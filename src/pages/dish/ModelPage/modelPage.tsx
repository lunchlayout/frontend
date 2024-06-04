import { selectors } from "@entities/Dish";
import Dish3DCanvas from "@widgets/Dish3DCanvas";
import { useSelector } from "react-redux";
import { IModelPageProps } from "./modelPage.props";
import styles from "./modelPage.module.scss";
import { Helmet } from "react-helmet";

export default function ModelPage({ className = "" }: IModelPageProps) {
	const dish = useSelector(selectors.dish);
	const scene = useSelector(selectors.scene);

	return (
		<main className={[styles.default, className].join(" ")}>
			<div className={styles.content}>
				{scene && <Dish3DCanvas />}
				{dish && (
					<Helmet
						title={`Модель — ${dish.name} — Lunch Layout`}
						meta={[
							{
								name: "description",
								content:
									"Страница для просмотра 3D модели блюда",
							},
						]}
					/>
				)}
			</div>
		</main>
	);
}
