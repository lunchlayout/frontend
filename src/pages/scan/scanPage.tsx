import { DishVideo } from "@entities/Dish/ui";
import { SEO } from "@shared/ui";
import React from "react";

export default function ScanPage() {
	return (
		<>
			<DishVideo
				title="Мясная пицца от шеф-повара Дмитрия Иванова"
				link="https://www.youtube.com/embed/6w00hjyIIQQ"
			/>
			<SEO title={`QR код — Lunch Layout`} />
		</>
	);
}
