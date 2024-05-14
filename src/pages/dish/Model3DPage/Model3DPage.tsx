import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { SEO } from "@shared/ui";
import { useSelector } from "react-redux";

export default function Model3DPage() {
	const { name } = useSelector(selectors.dish) as IDishWithCafeId;

	return (
		<>
			<SEO title={`3D модель — ${name} — Lunch Layout`} />;
		</>
	);
}
