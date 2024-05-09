import { BackLink, Title } from "@shared/ui";
import styles from "./mobileDishHeader.module.scss";

import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { CafeLogo } from "@entities/Cafe/ui";

export default function MobileDishHeader() {
	const { name } = useSelector(selectors.dish) as IDishWithCafeId;
	return (
		<header className={styles.default}>
			<BackLink />
			<Title level={2}>{name}</Title>
			<CafeLogo />
		</header>
	);
}
