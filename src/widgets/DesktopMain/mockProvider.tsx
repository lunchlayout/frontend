import { mockStore } from "@app/index";
import DesktopMain from "./desktopMain";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DesktopMain />
		</Provider>
	);
}
