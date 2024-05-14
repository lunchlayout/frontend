import { BASE_URL } from "@entities/Cafe/consts";
import { useLocation, useSearchParams } from "react-router-dom";

function useCafeSearchParams() {
	const location = useLocation();
	if (!location.pathname.includes(BASE_URL)) {
		throw new Error("This hook is only used in cafe url");
	}
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query") ?? "";
	const page = parseInt(searchParams.get("page") ?? "1");

	return { query, page, setCafeSearchParams: setSearchParams };
}

export { useCafeSearchParams };
