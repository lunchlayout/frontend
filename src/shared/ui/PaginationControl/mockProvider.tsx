import { useState } from "react";
import PaginationControl from "./paginationControl";

export default function MockProvider() {
	const [page, setPage] = useState(1);

	return (
		<PaginationControl
			currentPage={page}
			pageCnt={6}
			onRightClick={() => setPage(page + 1)}
			onLeftClick={() => setPage(page - 1)}
		/>
	);
}
