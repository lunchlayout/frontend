import styles from "./title.module.scss";
import { ITitleProps } from "./title.props";

export default function Title({
	children,
	level = 2,
	className = "",
}: ITitleProps) {
	const TitleTag: keyof JSX.IntrinsicElements = `h${level}`;
	return (
		<TitleTag
			className={[styles.default, styles[TitleTag], className].join(" ")}
		>
			{children}
		</TitleTag>
	);
}
