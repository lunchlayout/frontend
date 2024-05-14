import { Desktop, Mobile } from "@shared/hoc";
import MobileReviewHeader from "@widgets/MobileReviewHeader";
import { DesktopReviewHeader, MobileReviewControl } from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<Desktop>
				<DesktopReviewHeader />
				<Outlet />
			</Desktop>
			<Mobile>
				<MobileReviewHeader />
				<Outlet />
				<MobileReviewControl />
			</Mobile>
		</>
	);
}
