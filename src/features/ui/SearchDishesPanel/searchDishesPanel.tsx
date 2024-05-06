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

export default function SearchDishesPanel({
	className = "",
}: ISearchDishesPanelProps) {
	const currentPage = useSelector(selectors.currentPage);
	const dispatch = useAppDispatch();
	const { cafeId } = useParams<keyof ICafeParams>() as ICafeParams;
	const [query, setQuery] = useState("");

	async function searchDishes(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await dispatch(
			actions.getCafeById({ cafeId, query, page: currentPage }),
		);
	}
	return (
		<Query.Context.Provider
			value={{
				value: query,
				handleChange: e => setQuery(e.target.value),
			}}
		>
			<SearchPanel
				disabled={!currentPage}
				onSubmit={searchDishes}
				className={[styles.default, className].join(" ")}
				placeholder="Найти блюдо"
			/>
		</Query.Context.Provider>
	);
}
