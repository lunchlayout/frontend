import { useState } from "react";
import SearchPanel from "./searchPanel";
import { Query } from "@features/context";

export default function MockProvider() {
	const [query, setQuery] = useState("");
	const [disabled, setDisabled] = useState(false);

	return (
		<Query.Context.Provider
			value={{
				value: query,
				handleChange: e => setQuery(e.target.value),
			}}
		>
			<SearchPanel
				onSubmit={e => {
					e.preventDefault();
					setDisabled(true);
					setTimeout(() => {
						setDisabled(false);
					}, 1000);
				}}
				placeholder="Поиск..."
				disabled={disabled}
			/>
		</Query.Context.Provider>
	);
}
