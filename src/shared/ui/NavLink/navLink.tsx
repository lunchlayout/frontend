import { INavLinkProps } from "./navLink.props";
import styles from "./navLink.module.scss";
import { useMatch } from "react-router-dom";
import { Link } from "@shared/ui";

export default function NavLink({
	to,
	children,
	className,
	...props
}: INavLinkProps) {
	const match = useMatch(to);

	const isActiveClass = match ? "active" : "inactive";

	return (
		<Link
			to={to}
			className={[styles[isActiveClass], className].join(" ")}
			{...props}
		>
			{children}
		</Link>
	);
}
