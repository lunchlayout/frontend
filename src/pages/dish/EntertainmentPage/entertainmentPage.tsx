import { actions, selectors } from "@entities/Dish";
import { Desktop, Mobile } from "@shared/hoc";
import { SEO } from "@shared/ui";
import { DesktopDishEntMain, MobileDishEntMain } from "@widgets/index";
import { useSelector } from "react-redux";
import styles from "./entertainmentPage.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IDishParams } from "@app/types";
import { useAppDispatch } from "@app/index";
export default function EntertainmentPage() {
	const dish = useSelector(selectors.dish);
	const { dishId } = useParams<keyof IDishParams>() as IDishParams;
	const dispatch = useAppDispatch();
	useEffect(() => {
		async function getDishById() {
			await dispatch(actions.getDishById({ dishId }));
		}
		getDishById();
	}, [dishId, dispatch]);

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
