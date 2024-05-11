import { mockStore } from "@app/index";
import DesktopDishNav from "./desktopDishNav";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopDishNav />
		</Provider>
	);
}
