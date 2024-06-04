import styles from "./dishHeader.module.scss";
import { DishNavigation, MainLink } from "@features/ui";

export default function DishHeader() {
	return (
		<header>
			<div className={styles.content}>
				<MainLink />
				<DishNavigation />
			</div>
		</header>
	);
}
