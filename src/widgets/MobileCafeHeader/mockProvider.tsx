import { mockStore } from "@app/index";
import MobileCafeHeader from "./mobileCafeHeader";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<MobileCafeHeader />
		</Provider>
	);
}
