import { mockStore } from "@app/index";
import DishFooter from "./dishFooter";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DishFooter />
		</Provider>
	);
}
