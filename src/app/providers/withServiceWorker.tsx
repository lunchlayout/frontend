import { SERVICE_WORKER_PATH } from "@app/consts";
import { IDefaultProps } from "@shared/types";
import { useEffect } from "react";

export default function ServiceWorkerProvider({ children }: IDefaultProps) {
	useEffect(() => {
		let sw: ServiceWorkerRegistration;
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register(SERVICE_WORKER_PATH, {
					type: "module",
					updateViaCache: "all",
					scope: '/'
				})
				.then(registration => {
					sw = registration;
					console.log(`Service worker registered on ${sw.scope}`);
				});
		}
		return () => {
			sw && sw.unregister();
		};
	}, []);
	return children;
}
