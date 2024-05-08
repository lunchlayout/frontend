import { mockStore } from "@app/index";
import ProgressPanel from "./progressPanel";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<ProgressPanel />
		</Provider>
	);
}
