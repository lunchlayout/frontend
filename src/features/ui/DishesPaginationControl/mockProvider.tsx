import { Store } from "@app/index";
import { Provider } from "react-redux";
import PaginationControl from "./paginationControl";

export default function MockProvider() {
	return (
		<Provider store={Store}>
			<PaginationControl />
		</Provider>
	);
}
