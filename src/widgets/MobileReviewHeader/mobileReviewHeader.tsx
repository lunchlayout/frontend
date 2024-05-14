import { BackLink, Title } from "@shared/ui";
import styles from "./mobileReviewHeader.module.scss";

import { MainLogo } from "@features/ui";

export default function MobileReviewHeader() {
	return (
		<header className={styles.default}>
			<div className={styles.content}>
				<BackLink />
				<Title level={1}>Обратная связь</Title>
				<MainLogo />
			</div>
		</header>
	);
}
