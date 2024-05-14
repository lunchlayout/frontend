import { Title } from "@shared/ui";
import styles from "./mobileEntryHeader.module.scss";
import { MainLogo } from "@features/ui";

export default function MobileDishHeader() {
	return (
		<header className={styles.default}>
			<div className={styles.content}>
				<Title level={1}>Lunch Layout</Title>
				<MainLogo />
			</div>
		</header>
	);
}
