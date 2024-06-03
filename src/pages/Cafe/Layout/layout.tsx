import { selectors } from "@entities/Cafe";
import { CircularLoader } from "@shared/ui";
import { CommonHeader } from "@widgets/index";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Layout() {
	const isLoading = useSelector(selectors.isLoading);

	return (
		<>
			<CommonHeader />
			<Outlet />
			<CircularLoader open={isLoading} />
		</>
	);
}
