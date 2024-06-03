import { SearchPanel } from "@shared/ui";
import { ISearchCafesPanelProps } from "./searchCafesPanel.props";
import { FormEvent, useState } from "react";
import { selectors, actions } from "@entities/Cafe";
import { useSelector } from "react-redux";
import { Query } from "@features/context";
import { useAppDispatch } from "@app/index";
import { useCafeSearchParams } from "@features/hook";

export default function SearchCafesPanel({
	className = "",
}: ISearchCafesPanelProps) {
	const { page, query, setCafeSearchParams } = useCafeSearchParams();
	const isLoading = useSelector(selectors.isLoading);
	const dispatch = useAppDispatch();
	const [tempQuery, setTempQuery] = useState(query);

	async function searchDishes(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newSearchParams = {
			query: tempQuery,
			page,
		};
		dispatch(actions.setIsLoading(true));
		const res = await dispatch(actions.getCafes({ ...newSearchParams }));
		if (res.meta.requestStatus === "fulfilled") {
			setCafeSearchParams({
				...newSearchParams,
				page: newSearchParams.page.toString(),
			});
		}
		dispatch(actions.setIsLoading(false));
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
				className={className}
				placeholder="Поиск..."
			/>
		</Query.Context.Provider>
	);
}
