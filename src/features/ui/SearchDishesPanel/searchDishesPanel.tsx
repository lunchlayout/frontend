import { SearchPanel } from "@shared/ui";
import { ISearchDishesPanelProps } from "./searchDishesPanel.props";
import { FormEvent, useState } from "react";
import { selectors, actions } from "@entities/Cafe";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Query } from "@features/context";
import { ICafeParams } from "@app/types";
import { useAppDispatch } from "@app/index";
import styles from "./searchDishesPanel.module.scss";
import { useCafeSearchParams } from "@features/hook";

export default function SearchDishesPanel({
	className = "",
}: ISearchDishesPanelProps) {
	const { page, query, setCafeSearchParams } = useCafeSearchParams();
	const isLoading = useSelector(selectors.isLoading);
	const dispatch = useAppDispatch();
	const { cafeId } = useParams<keyof ICafeParams>() as ICafeParams;
	const [tempQuery, setTempQuery] = useState(query);

	async function searchDishes(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const newSearchParams = {
			tempQuery,
			page,
		};
		await dispatch(actions.getCafeById({ cafeId, ...newSearchParams }));
		setCafeSearchParams({
			...newSearchParams,
			page: newSearchParams.page.toString(),
		});
	}
	return (
		<Query.Context.Provider
			value={{
				value: tempQuery,
				handleChange: e => setTempQuery(e.target.value),
			}}
		>
			<SearchPanel
				disabled={isLoading}
				onSubmit={searchDishes}
				className={[styles.default, className].join(" ")}
				placeholder="Найти блюдо"
			/>
		</Query.Context.Provider>
	);
}
