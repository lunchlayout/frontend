import { Desktop, Mobile } from "@shared/hoc";
import {
	DesktopDishHeader,
	MobileDishHeader,
	MobileDishControl,
	DesktopDishControl,
} from "@widgets/index";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IDishParams } from "@app/types";
import { useAppDispatch } from "@app/index";
import { actions } from "@entities/Dish";

export default function Layout() {
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
				<DesktopDishHeader />
				<Outlet />
				<DesktopDishControl />
			</Desktop>
			<Mobile>
				<MobileDishHeader />
				<Outlet />
				<MobileDishControl />
			</Mobile>
		</>
	);
}
