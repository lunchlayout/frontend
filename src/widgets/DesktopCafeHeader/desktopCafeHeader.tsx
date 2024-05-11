import styles from "./desktopCafeHeader.module.scss";

import { ReviewTextLink } from "@entities/Review/ui";
import { CafeLogo } from "@entities/Cafe/ui";
import { Title } from "@shared/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import { ICafe } from "@entities/Cafe/types";

export default function DesktopCafeHeader() {
	const { name } = useSelector(selectors.сafe) as ICafe;
	return (
		<header className={styles.default}>
			<CafeLogo />
			<Title level={1} className={styles.title}>
				{name}
			</Title>
			<ReviewTextLink />
		</header>
	);
}
