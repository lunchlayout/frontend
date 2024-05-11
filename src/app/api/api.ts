import axios from "axios";
import { getOriginURL } from "@shared/lib";

const $api = axios.create({
	baseURL: getOriginURL({
		host: import.meta.env.VITE_SERVER_HOST,
		port: import.meta.env.VITE_SERVER_PORT,
		protocol: import.meta.env.VITE_SERVER_PROTOCOL,
	}),
	headers: {
		"Content-Type": "application/json",
	},
	responseType: "json",
	timeout: 5000,
});

export { $api };
