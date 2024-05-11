import { mockStore } from "@app/index";
import DesktopDishControl from "./desktopDishControl";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopDishControl />
		</Provider>
	);
}
