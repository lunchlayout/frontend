import { Store } from "@app/index";
import SendDishIdPanel from "./sendDishIdPanel";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={Store}>
			<SendDishIdPanel />
		</Provider>
	);
}
