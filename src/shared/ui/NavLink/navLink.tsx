import { INavLinkProps } from "./navLink.props";

import { useMatch } from "react-router-dom";

import { Link } from "@shared/ui";

export default function NavLink({
	to,
	children,
	className,
	...props
}: INavLinkProps) {
	const match = useMatch(to);

	const isActiveClass = match ? "underlined" : "text";

	return (
		<Link to={to} type={isActiveClass} className={className} {...props}>
			{children}
		</Link>
	);
}
