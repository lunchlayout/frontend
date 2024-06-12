import {
	ReduxProvider,
	RouterProvider,
	ServiceWorkerProvider,
} from "./providers";
import "@styles/globals.scss";

function App() {
	return (
		<ServiceWorkerProvider>
			<ReduxProvider>
				<RouterProvider />
			</ReduxProvider>
		</ServiceWorkerProvider>
	);
}

export default App;
