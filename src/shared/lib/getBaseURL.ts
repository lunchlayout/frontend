import { IURL } from "../types";

function getBaseURL({ host, port, protocol }: IURL) {
	return `${protocol}://${host}:${port}`;
}

export { getBaseURL };
