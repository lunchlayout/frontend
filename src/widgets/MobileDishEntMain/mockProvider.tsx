import { mockStore } from "@app/index";
import MobileDishEntMain from "./mobileDishEntMain";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<MobileDishEntMain />
		</Provider>
	);
}
