import { useSelector } from "react-redux";
import styles from "./progressPanel.module.scss";
import { selectors } from "@entities/Dish";
import { Progress, Image } from "@shared/ui";
import { LOADING_PHRASES, TIME_OF_SHOWING_TEXT } from "./consts";
import { IProgressPanelProps } from "./progressPanel.props";
import { useEffect, useRef, useState } from "react";

export default function ProgressPanel({ className = "" }: IProgressPanelProps) {
	const modelLoadingProgress = useSelector(selectors.modelLoadingProgress);
	const [currentStep, setCurrentStep] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setCurrentStep(step => {
				if (step === LOADING_PHRASES.length - 1) {
					return 0;
				} else {
					return step + 1;
				}
			});
		}, TIME_OF_SHOWING_TEXT);
		return () => {
			clearInterval(timerRef.current!);
		};
	}, []);

	return (
		<>
			{modelLoadingProgress?.max && (
				<div className={[styles.default, className].join(" ")}>
					<Progress
						label="Индикатор загрузки 3D модели"
						value={modelLoadingProgress.value}
						max={modelLoadingProgress.max}
						className={styles.progress}
						slider={
							<Image src="/images/progressCar.png" width={120} />
						}
					/>
					<span key={currentStep} className={styles.text}>
						{LOADING_PHRASES[currentStep] + "..."}
					</span>
				</div>
			)}
		</>
	);
}
