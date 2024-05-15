import { useCafeLoader } from "@entities/Cafe/hook";
import { Desktop, Mobile } from "@shared/hoc";
import MobileCafeHeader from "@widgets/MobileCafeHeader";
import { DesktopCafeHeader, MobileCafeControl } from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
	useCafeLoader();

	return (
		<>
			<Desktop>
				<DesktopCafeHeader />
				<Outlet />
			</Desktop>
			<Mobile>
				<MobileCafeHeader />
				<Outlet />
				<MobileCafeControl />
			</Mobile>
		</>
	);
}
