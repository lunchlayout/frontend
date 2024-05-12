import { mockStore } from "@app/index";
import DesktopDishMain from "./desktopDishMain";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopDishMain />
		</Provider>
	);
}
