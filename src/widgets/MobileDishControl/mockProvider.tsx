import { mockStore } from "@app/index";
import MobileDishControl from "./mobileDishControl";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<MobileDishControl />
		</Provider>
	);
}
