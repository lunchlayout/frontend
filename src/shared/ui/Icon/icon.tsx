import { IIconProps } from "./icon.props";
import styles from "./icon.module.scss";

export default function Icon({
	type = "simple",
	children,
	className = "",
}: IIconProps) {
	return (
		<span className={[styles.default, styles[type], className].join(" ")}>
			{children}
		</span>
	);
}
