import { CommonHeader } from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<CommonHeader />
			<Outlet />
		</>
	);
}
