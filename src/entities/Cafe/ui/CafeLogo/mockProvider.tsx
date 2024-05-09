import { mockStore } from "@app/index";
import { Provider } from "react-redux";
import CafeLogo from "./cafeLogo";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<CafeLogo />
		</Provider>
	);
}
