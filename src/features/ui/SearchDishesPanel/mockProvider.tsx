import { mockStore } from "@app/index";
import SearchDishesPanel from "./searchDishesPanel";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<SearchDishesPanel />
		</Provider>
	);
}
