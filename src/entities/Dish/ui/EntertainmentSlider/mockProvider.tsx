import { mockStore } from "@app/index";
import EntertainmentSlider from "./entertainmentSlider";
import { Provider } from "react-redux";

export default function MockProvider() {
	return (
		<Provider store={mockStore}>
			<EntertainmentSlider />
		</Provider>
	);
}
