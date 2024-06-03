import { ITitleProps } from "./title.props";

export default function Title({
	children,
	level = 2,
	className = "",
}: ITitleProps) {
	const TitleTag: keyof JSX.IntrinsicElements = `h${level}`;

	return <TitleTag className={[className].join(" ")}>{children}</TitleTag>;
}
