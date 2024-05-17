import { Desktop, Mobile } from "@shared/hoc";
import {
	DesktopDishHeader,
	MobileDishHeader,
	MobileDishControl,
	DesktopDishControl,
} from "@widgets/index";
import { Outlet } from "react-router-dom";

import { useDishLoader, useDishModelLoader } from "@entities/Dish/hook";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { CircularLoader } from "@shared/ui";

export default function Layout() {
	useDishLoader();

	useDishModelLoader();

	const isLoading = useSelector(selectors.isLoading);

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
			<CircularLoader open={isLoading} />
		</>
	);
}
