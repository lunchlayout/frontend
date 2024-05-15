import { selectors } from "@entities/Dish";
import { SEO } from "@shared/ui";
import { useSelector } from "react-redux";

export default function ModelARPage() {
	const dish = useSelector(selectors.dish);

	return (
		<>{dish && <SEO title={`AR модель — ${dish.name} — Lunch Layout`} />}</>
	);
}
