import { Desktop, Mobile } from "@shared/hoc";
import {
	DesktopDishHeader,
	MobileDishHeader,
	MobileDishControl,
	DesktopDishControl,
} from "@widgets/index";
import { Outlet } from "react-router-dom";

import { useDishLoader, useDishModelLoader } from "@entities/Dish/hook";

export default function Layout() {
	useDishLoader();

	useDishModelLoader();

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
