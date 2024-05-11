import { IOrigin } from "@shared/types";

function getOriginURL({ host, port, protocol }: IOrigin) {
	return `${protocol}://${host}:${port}`;
}

export { getOriginURL };
