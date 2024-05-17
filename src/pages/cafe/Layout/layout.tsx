import { selectors } from "@entities/Cafe";
import { useCafeLoader } from "@entities/Cafe/hook";
import { Desktop, Mobile } from "@shared/hoc";
import { CircularLoader } from "@shared/ui";
import MobileCafeHeader from "@widgets/MobileCafeHeader";
import { DesktopCafeHeader, MobileCafeControl } from "@widgets/index";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Layout() {
	useCafeLoader();
	const isLoading = useSelector(selectors.isLoading);
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
			<CircularLoader open={isLoading} />
		</>
	);
}
