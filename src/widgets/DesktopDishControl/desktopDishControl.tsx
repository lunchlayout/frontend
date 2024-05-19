import styles from "./desktopDishControl.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { ModelLink, ProgressPanel } from "@features/ui";

export default function DesktopDishControl() {
	const modelLoadingProgress = useSelector(selectors.modelLoadingProgress);
	const dish = useSelector(selectors.dish);
	const modelLoaded =
		modelLoadingProgress &&
		modelLoadingProgress.value >= modelLoadingProgress.max;

	return (
		<>
			{dish && (
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
