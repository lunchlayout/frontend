import React from "react";
import DishesPanel from "@widgets/DishesPanel";
import { SEO } from "@shared/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";

export default function CafePage() {
	const { name: cafeName } = useSelector(selectors.сafe);
	return (
		<>
			<DishesPanel />
			<SEO title={`${cafeName} — Lunch Layout`} />
		</>
	);
}
