import { PaginationControl } from "@shared/ui";
import { IDishesPaginationControlProps } from "./dishesPaginationControl.props";
import { useSelector } from "react-redux";
import { actions, selectors } from "@entities/Cafe";
import { useAppDispatch } from "@app/index";
import styles from "./dishesPaginationControl.module.scss";
import { useParams } from "react-router-dom";
import { ICafeParams } from "@app/types";
import { useCafeSearchParams } from "@features/hook";

export default function DishesPaginationControl({
	className = "",
}: IDishesPaginationControlProps) {
	const pageCnt = useSelector(selectors.pageCnt);
	const { cafeId } = useParams<keyof ICafeParams>() as ICafeParams;
	const dispatch = useAppDispatch();
	const { page, query, setCafeSearchParams } = useCafeSearchParams();
	async function nextPage() {
		const newSearchParams = {
			query,
			page: page + 1,
		};
		await dispatch(actions.getCafeById({ cafeId, ...newSearchParams }));
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
		await dispatch(actions.getCafeById({ cafeId, ...newSearchParams }));
		setCafeSearchParams({
			...newSearchParams,
			page: newSearchParams.page.toString(),
		});
	}

	return (
		<>
			{pageCnt && (
				<PaginationControl
					currentPage={page}
					pageCnt={pageCnt}
					onLeftClick={prevPage}
					onRightClick={nextPage}
					className={[styles.default, className].join(" ")}
				/>
			)}
		</>
	);
}
