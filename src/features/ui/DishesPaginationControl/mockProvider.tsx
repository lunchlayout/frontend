import { mockStore } from "@app/index";
import { Provider } from "react-redux";
import PaginationControl from "./paginationControl";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<PaginationControl />
		</Provider>
	);
}
