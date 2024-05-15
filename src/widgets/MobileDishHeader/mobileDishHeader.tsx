import { BackLink, Title } from "@shared/ui";
import styles from "./mobileDishHeader.module.scss";

import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { CafeLogo } from "@entities/Cafe/ui";

export default function MobileDishHeader() {
	const dish = useSelector(selectors.dish);
	console.log(1);
	return (
		<>
			{dish && (
				<header className={styles.default}>
					<div className={styles.content}>
						<BackLink />
						<Title level={2}>{dish.name}</Title>
						<CafeLogo />
					</div>
				</header>
			)}
		</>
	);
}
