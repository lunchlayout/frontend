import { mockStore } from "@app/index";
import MobileDishMain from "./mobileDishMain";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<MobileDishMain />
		</Provider>
	);
}
