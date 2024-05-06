import { mockStore } from "@app/index";
import DishesPanel from "./dishesPanel";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DishesPanel />
		</Provider>
	);
}
