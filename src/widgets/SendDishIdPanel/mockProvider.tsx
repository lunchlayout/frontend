import { mockStore } from "@app/index";
import SendDishIdPanel from "./sendDishIdPanel";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<SendDishIdPanel />
		</Provider>
	);
}