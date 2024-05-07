import { IButtonProps } from "./button.props";
import styles from "./button.module.scss";

export default function Button({
	customType = "simple",
	type = "button",
	children,
	onClick,
	className = "",
	formId,
	disabled = false,
}: IButtonProps) {
	return (
		<button
			type={type}
			className={[styles.default, styles[customType], className].join(
				" ",
			)}
			onClick={onClick}
			form={formId}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
