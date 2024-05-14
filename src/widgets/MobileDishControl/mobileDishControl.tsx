import styles from "./mobileDishControl.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";

import { ProgressPanel } from "@features/ui";
import { DishLoadedPanel } from "@entities/Dish/ui";

export default function MobileDishControl() {
	const modelLoadingProgress = useSelector(selectors.modelLoadingProgress);
	const progressExist = modelLoadingProgress?.max;
	const modelLoaded =
		progressExist && modelLoadingProgress.value >= modelLoadingProgress.max;
	return (
		<>
			{progressExist && (
				<div className={styles.default}>
					<div className={styles.content}>
						{!modelLoaded && <ProgressPanel />}
						{modelLoaded && <DishLoadedPanel />}
					</div>
				</div>
			)}
		</>
	);
}
