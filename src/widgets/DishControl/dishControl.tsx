import styles from "./dishControl.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { ModelLink, ProgressPanel } from "@features/ui";

export default function DishControl() {
	const modelLoadingProgress = useSelector(selectors.modelLoadingProgress);
	const dish = useSelector(selectors.dish);
	const modelLoaded =
		modelLoadingProgress?.max &&
		modelLoadingProgress.value >= modelLoadingProgress.max;

	return (
		<>
			{dish && (
				<section>
					<div className={styles.content}>
						{!modelLoaded && <ProgressPanel />}
						{modelLoaded && <ModelLink />}
					</div>
				</section>
			)}
		</>
	);
}
