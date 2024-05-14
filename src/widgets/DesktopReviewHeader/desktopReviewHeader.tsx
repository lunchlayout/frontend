import styles from "./desktopReviewHeader.module.scss";

import { Title } from "@shared/ui";
import { MainLogo } from "@features/ui";

export default function DesktopReviewHeader() {
	return (
		<header className={styles.default}>
			<div className={styles.content}>
				<MainLogo />
				<Title level={1} className={styles.title}>
					Обратная связь
				</Title>
			</div>
		</header>
	);
}
