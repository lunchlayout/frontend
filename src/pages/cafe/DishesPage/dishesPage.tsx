import { selectors } from "@entities/Cafe";
import { SEO } from "@shared/ui";
import { DishesPanel } from "@widgets/index";
import { useSelector } from "react-redux";
import styles from "./dishesPage.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "@app/index";
import { useParams } from "react-router-dom";
import { ICafeParams } from "@app/types";
import { actions } from "@entities/Cafe";

export default function DishesPage() {
	const cafe = useSelector(selectors.сafe);
	const dispatch = useAppDispatch();
	const { cafeId } = useParams<keyof ICafeParams>() as ICafeParams;

	useEffect(() => {
		async function getCafeById() {
			const res = await dispatch(actions.getCafeById({ cafeId }));
			console.log(res);
		}
		getCafeById();
	}, [cafeId, dispatch]);

	return (
		<>
			{cafe && (
				<main className={styles.main}>
					<div className={styles.content}>
						<DishesPanel />
						<SEO title={`${cafe.name} — Lunch Layout`} />
					</div>
				</main>
			)}
		</>
	);
}
