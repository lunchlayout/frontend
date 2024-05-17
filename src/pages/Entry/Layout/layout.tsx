import { selectors } from "@entities/Dish";
import { Desktop, Mobile } from "@shared/hoc";
import { CircularLoader } from "@shared/ui";
import {
	MobileEntryHeader,
	MobileEntryControl,
	DesktopEntryHeader,
} from "@widgets/index";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Layout() {
	const isLoading = useSelector(selectors.isLoading);
	return (
		<>
			<Desktop>
				<DesktopEntryHeader />
				<Outlet />
			</Desktop>
			<Mobile>
				<MobileEntryHeader />
				<Outlet />
				<MobileEntryControl />
			</Mobile>
			<CircularLoader open={isLoading} />
		</>
	);
}
