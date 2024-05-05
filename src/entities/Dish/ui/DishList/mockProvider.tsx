import { mockStore } from "@app/index";
import DishList from "./dishList";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DishList />
		</Provider>
	);
}
