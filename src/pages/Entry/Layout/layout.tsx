import { Desktop, Mobile } from "@shared/hoc";
import {
	MobileEntryHeader,
	MobileEntryControl,
	DesktopEntryHeader,
} from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
		</>
	);
}
