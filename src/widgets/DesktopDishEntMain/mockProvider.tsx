import { mockStore } from "@app/index";
import DesktopDishEntMain from "./desktopDishEntMain";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopDishEntMain />
		</Provider>
	);
}
