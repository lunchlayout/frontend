import { useSelector } from "react-redux";
import styles from "./progressPanel.module.scss";
import { selectors } from "@entities/Dish";
import Progress, { IProgress } from "@shared/ui/Progress";
import { LOADING_PHRASES, LOADING_STEP } from "./consts";
import { convertProgressToPercent } from "@shared/lib";
import { IProgressPanelProps } from "./progressPanel.props";

export default function ProgressPanel({ className = "" }: IProgressPanelProps) {
	const { value, max } = useSelector(
		selectors.modelLoadingProgress,
	) as IProgress;
	const perValue = convertProgressToPercent(value, max);
	const currentStep = Math.floor(perValue / LOADING_STEP);

	return (
		<div className={[styles.default, className].join(" ")}>
			<Progress
				label="Индикатор загрузки 3D модели"
				value={value}
				max={max}
				className={styles.progress}
			/>
			<span key={currentStep} className={styles.text}>
				{LOADING_PHRASES[currentStep] + "..."}
			</span>
		</div>
	);
}