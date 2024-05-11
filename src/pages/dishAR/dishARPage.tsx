import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { SEO } from "@shared/ui";
import React from "react";
import { useSelector } from "react-redux";

export default function DishARPage() {
	const { name: dishName } = useSelector(selectors.dish) as IDishWithCafeId;
	return (
		<>
			<SEO title={`AR — ${dishName} — Lunch Layout`} />
		</>
	);
}