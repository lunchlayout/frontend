import { Rating } from "@features/context";
import { useState } from "react";
import { IRating } from "@entities/Review/types";
import RatingSection from "./ratingSection";

export default function MockProvider() {
	const [rate, setRate] = useState<IRating>();

	return (
		<Rating.Context.Provider
			value={{
				value: rate,
				handleChange: e => {
					setRate(+e.target.value as IRating);
				},
			}}
		>
			<RatingSection />
		</Rating.Context.Provider>
	);
}
