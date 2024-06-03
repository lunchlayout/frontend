import { IProgressProps } from "./progress.props";
import styles from "./progress.module.scss";
import { convertProgressToPercent } from "@shared/lib";

export default function Progress({
	value,
	max = 100,
	label = "",
	className = "",
	slider,
}: IProgressProps) {
	if (max <= 0) max = 100;
	const perValue = convertProgressToPercent(value, max);

	return (
		<div
			className={[
				styles.default,
				styles[`progress-${perValue}`],
				className,
			].join(" ")}
			aria-label={label}
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={perValue}
		>
			{slider && <div className={styles.slider}>{slider}</div>}
		</div>
	);
}
