import styles from "./desktopCafeHeader.module.scss";

import { ReviewTextLink } from "@entities/Review/ui";
import { CafeLogo } from "@entities/Cafe/ui";
import { Title } from "@shared/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";

export default function DesktopCafeHeader() {
	const { name } = useSelector(selectors.сafe);
	return (
		<header className={styles.default}>
			<div className={styles.content}>
				<CafeLogo />
				{name && (
					<>
						<Title level={1} className={styles.title}>
							{name}
						</Title>
					</>
				)}

				<ReviewTextLink />
			</div>
		</header>
	);
}
