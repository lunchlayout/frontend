import { mockStore } from "@app/index";
import MobileDishFooter from "./mobileDishFooter";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<MobileDishFooter />
		</Provider>
	);
}
