import styles from "./desktopDishHeader.module.scss";
import { DesktopDishNav } from "@features/ui";
import { ReviewTextLink } from "@entities/Review/ui";
import { CafeLogo } from "@entities/Cafe/ui";

export default function DesktopDishHeader() {
	return (
		<header className={styles.default}>
			<div className={styles.content}>
				<CafeLogo />
				<DesktopDishNav className={styles.nav} />
				<ReviewTextLink />
			</div>
		</header>
	);
}
