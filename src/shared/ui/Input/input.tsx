import { IInputProps } from "./input.props";
import styles from "./input.module.scss";

export default function Input({
	hasOutline = true,
	className = "",
	value,
	...props
}: IInputProps) {
	return (
		<input
			className={[
				styles.default,
				hasOutline ? styles.outline : "",
				value && styles.hasContent,
				className,
			].join(" ")}
			value={value}
			{...props}
		/>
	);
}
