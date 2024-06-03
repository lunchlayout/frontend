import EmojiRating from "./emojiRating";
import { useState } from "react";
import { IRating } from "@entities/Review/types";

export default function MockProvider() {
	const [rate, setRate] = useState<IRating>();

	return (
		<EmojiRating
			onChange={e => setRate(+e.target.value as IRating)}
			value={rate}
		/>
	);
}
