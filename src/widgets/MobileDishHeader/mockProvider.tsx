import { mockStore } from "@app/index";
import MobileDishHeader from "./mobileDishHeader";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<MobileDishHeader />
		</Provider>
	);
}
