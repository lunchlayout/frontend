import { Desktop, Mobile } from "@shared/hoc";
import {
	DesktopDishHeader,
	MobileDishHeader,
	MobileDishControl,
	DesktopDishControl,
} from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
