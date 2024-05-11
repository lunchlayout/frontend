import styles from "./desktopEntryHeader.module.scss";
import { MainLogo, DesktopEntryNav } from "@features/ui";
import { ReviewTextLink } from "@entities/Review/ui";

export default function DesktopEntryHeader() {
	return (
		<header className={styles.default}>
			<MainLogo />
			<DesktopEntryNav className={styles.nav} />
			<ReviewTextLink />
		</header>
	);
}
