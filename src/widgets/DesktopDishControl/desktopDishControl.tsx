import styles from "./desktopDishControl.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IProgress } from "@shared/ui/Progress";
import { ProgressPanel } from "@features/ui";
import { DishLoadedPanel } from "@entities/Dish/ui";

export default function DesktopDishControl() {
	const { max, value } = useSelector(
		selectors.modelLoadingProgress,
	) as IProgress;
	const modelLoaded = value >= max;
	return (
		<div className={styles.default}>
			{!modelLoaded && <ProgressPanel />}
			{modelLoaded && <DishLoadedPanel />}
		</div>
	);
}
