import styles from "./desktopEntryHeader.module.scss";
import { MainLogo, DesktopEntryNav } from "@features/ui";
import { ReviewTextLink } from "@entities/Review/ui";

export default function DesktopEntryHeader() {
	return (
		<header className={styles.default}>
			<div className={styles.content}>
				<MainLogo />
				<DesktopEntryNav className={styles.nav} />
				<ReviewTextLink />
			</div>
		</header>
	);
}
