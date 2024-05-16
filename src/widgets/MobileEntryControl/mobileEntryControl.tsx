import { NavLink } from "@shared/ui";
import styles from "./mobileEntryControl.module.scss";

export default function MobileEntryControl() {
	return (
		<div className={styles.default}>
			<div className={styles.content}>
				<nav>
					<ul className={styles.links}>
						<li className={styles.linkItem}>
							<NavLink
								className={styles.link}
								to="/scan"
								type="primary"
							>
								QR код
							</NavLink>
						</li>
						<li className={styles.linkItem}>
							<NavLink
								className={styles.link}
								to="/"
								type="primary"
							>
								Ввести код
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
