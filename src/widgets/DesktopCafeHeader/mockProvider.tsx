import { mockStore } from "@app/index";
import DesktopCafeHeader from "./desktopCafeHeader";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopCafeHeader />
		</Provider>
	);
}
