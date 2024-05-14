import styles from "./desktopDishControl.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { ModelLink, ProgressPanel } from "@features/ui";

export default function DesktopDishControl() {
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
						{modelLoaded && <ModelLink />}
					</div>
				</div>
			)}
		</>
	);
}
