import { mockStore } from "@app/index";
import DishLoadedPanel from "./dishLoadedPanel";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<DishLoadedPanel />
		</Provider>
	);
}
