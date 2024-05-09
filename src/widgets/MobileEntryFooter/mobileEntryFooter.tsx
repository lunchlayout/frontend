import { NavLink } from "@shared/ui";
import styles from "./mobileEntryFooter.module.scss";

export default function MobileEntryFooter() {
	return (
		<footer className={styles.default}>
			<nav>
				<ul className={styles.links}>
					<li>
						<NavLink
							className={styles.link}
							to="/scan"
							type="primary"
						>
							QR код
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.link} to="/" type="primary">
							Ввести код
						</NavLink>
					</li>
				</ul>
			</nav>
		</footer>
	);
}
