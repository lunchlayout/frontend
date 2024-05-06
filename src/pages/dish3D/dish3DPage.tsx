import React from "react";

import { SEO } from "@shared/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";

export default function Dish3DPage() {
	const { name: dishName } = useSelector(selectors.dish) as IDishWithCafeId;

	return (
		<>
			<SEO title={`3D — ${dishName} — Lunch Layout`} />
		</>
	);
}
