import styles from "./mobileDishFooter.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IProgress } from "@shared/ui/Progress";
import { ProgressPanel } from "@features/ui";
import { DishLoadedPanel } from "@entities/Dish/ui";

export default function MobileDishFooter() {
	const { max, value } = useSelector(
		selectors.modelLoadingProgress,
	) as IProgress;
	const modelLoaded = value >= max;
	return (
		<footer className={styles.default}>
			{!modelLoaded && <ProgressPanel />}
			{modelLoaded && <DishLoadedPanel />}
		</footer>
	);
}