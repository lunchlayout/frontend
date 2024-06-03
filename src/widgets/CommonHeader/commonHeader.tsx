import styles from "./commonHeader.module.scss";
import { CommonNavigation, MainLink } from "@features/ui";

export default function CommonHeader() {
	return (
		<header>
			<div className={styles.content}>
				<MainLink />
				<CommonNavigation />
			</div>
		</header>
	);
}
