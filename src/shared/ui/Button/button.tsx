import { IButtonProps } from "./button.props";
import styles from "./button.module.scss";

export default function Button({
	customType = "filled",
	type = "button",
	hasHover = true,
	children,
	className = "",
	...props
}: IButtonProps) {
	return (
		<button
			type={type}
			className={[
				styles.default,
				hasHover && styles.hasHover,
				styles[customType],
				className,
			].join(" ")}
			{...props}
		>
			{children}
		</button>
	);
}
