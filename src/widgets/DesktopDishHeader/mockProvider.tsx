import { mockStore } from "@app/index";
import DesktopDishHeader from "./desktopDishHeader";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopDishHeader />
		</Provider>
	);
}
