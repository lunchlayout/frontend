import { ILinkProps } from "./link.props";
import styles from "./link.module.scss";
import { Link as ReactLink } from "react-router-dom";

export default function Link({
	type = "outlined",
	to = "/",
	children,
	className = "",
}: ILinkProps) {
	return (
		<ReactLink
			to={to}
			className={[styles.default, styles[type], className].join(" ")}
		>
			{children}
		</ReactLink>
	);
}
