import { PaginationControl } from "@shared/ui";
import { ICafesPaginationControlProps } from "./cafesPaginationControl.props";
import { useSelector } from "react-redux";
import { actions, selectors } from "@entities/Cafe";
import { useAppDispatch } from "@app/index";
import styles from "./cafesPaginationControl.module.scss";
import { useCafeSearchParams } from "@features/hook";

export default function CafesPaginationControl({
	className = "",
}: ICafesPaginationControlProps) {
	const currentCafes = useSelector(selectors.currentCafes);
	const dispatch = useAppDispatch();
	const { page, query, setCafeSearchParams } = useCafeSearchParams();

	async function nextPage() {
		const newSearchParams = {
			query,
			page: page + 1,
		};
		await dispatch(actions.getCafes({ ...newSearchParams }));
		setCafeSearchParams({
			...newSearchParams,
			page: newSearchParams.page.toString(),
		});
	}
	async function prevPage() {
		const newSearchParams = {
			query,
			page: page - 1,
		};
		await dispatch(actions.getCafes({ ...newSearchParams }));
		setCafeSearchParams({
			...newSearchParams,
			page: newSearchParams.page.toString(),
		});
	}

	return (
		<>
			{currentCafes && (
				<PaginationControl
					currentPage={page}
					pageCnt={currentCafes.pageCnt}
					onLeftClick={prevPage}
					onRightClick={nextPage}
					className={[styles.default, className].join(" ")}
				/>
			)}
		</>
	);
}
