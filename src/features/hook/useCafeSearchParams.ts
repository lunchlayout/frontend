import { useSearchParams } from "react-router-dom";

function useCafeSearchParams() {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query") ?? "";
	const page = parseInt(searchParams.get("page") ?? "1");

	return { query, page, setCafeSearchParams: setSearchParams };
}

export { useCafeSearchParams };
