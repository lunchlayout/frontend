import { NavLink } from "@shared/ui";
import styles from "./mobileEntryControl.module.scss";

export default function MobileEntryControl() {
	return (
		<div className={styles.default}>
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
		</div>
	);
}
