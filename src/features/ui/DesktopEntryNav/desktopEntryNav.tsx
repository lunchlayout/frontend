import { NavLink } from "@shared/ui";
import styles from "./desktopEntryNav.module.scss";
import { IDesktopEntryNavProps } from "./desktopEntryNav.props";

export default function DesktopEntryNav({
	className = "",
}: IDesktopEntryNavProps) {
	return (
		<nav className={className}>
			<ul className={styles.links}>
				<li>
					<NavLink to="/scan">QR код</NavLink>
				</li>
				<li>
					<NavLink to="/">Ввести код</NavLink>
				</li>
			</ul>
		</nav>
	);
}
