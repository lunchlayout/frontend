import { BackLink, Title } from "@shared/ui";
import styles from "./mobileCafeHeader.module.scss";
import { useSelector } from "react-redux";
import { CafeLogo } from "@entities/Cafe/ui";
import { selectors } from "@entities/Cafe";
import { ICafe } from "@entities/Cafe/types";

export default function MobileCafeHeader() {
	const { name } = useSelector(selectors.сafe) as ICafe;

	return (
		<header className={styles.default}>
			<BackLink />
			<Title level={2}>{name}</Title>
			<CafeLogo />
		</header>
	);
}
