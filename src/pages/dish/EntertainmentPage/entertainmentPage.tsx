import { selectors } from "@entities/Dish";
import { Desktop, Mobile } from "@shared/hoc";
import { SEO } from "@shared/ui";
import { DesktopDishEntMain, MobileDishEntMain } from "@widgets/index";
import { useSelector } from "react-redux";
import styles from "./entertainmentPage.module.scss";
export default function EntertainmentPage() {
	const dish = useSelector(selectors.dish);

	return (
		<>
			<Desktop>
				<DesktopDishEntMain className={styles.main} />
			</Desktop>
			<Mobile>
				<MobileDishEntMain className={styles.main} />
			</Mobile>
			{dish && <SEO title={`${dish.name} — Lunch Layout`} />}
		</>
	);
}
