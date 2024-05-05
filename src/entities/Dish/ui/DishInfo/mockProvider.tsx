import { mockStore } from "@app/index";
import DishInfo from "./dishInfo";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DishInfo />
		</Provider>
	);
}
