import { selectors } from "@entities/Dish";
import { SEO } from "@shared/ui";
import { useSelector } from "react-redux";

export default function Model3DPage() {
	const dish = useSelector(selectors.dish);
	return (
		<>{dish && <SEO title={`3D модель — ${dish.name} — Lunch Layout`} />}</>
	);
}
