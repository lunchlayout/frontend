import React, { useEffect, useRef, useState } from "react";
import { Button, Input, SEO, TextArea } from "@shared/ui";
import EmojiRadio from "@shared/ui/EmojiRadio";
import Progress from "../../shared/ui/Progress/progress";
import QuizOption from "@features/ui/QuizOption";
import { CommentSection } from "@entities/Review/ui";
import { Comment } from "@features/context";

import SearchDishesPanel from "@features/ui/SearchDishesPanel";
import DishFooter from "@entities/Dish/ui/DishLoadedPanel";

export default function HomePage() {
	const [checked, setChecked] = useState(false);
	const [progress, setProgress] = useState(0);
	const refId = useRef<NodeJS.Timeout | 0>(0);
	const [comment, setComment] = useState<string>("");

	useEffect(() => {
		refId.current = setInterval(() => {
			setProgress(pr => {
				if (pr >= 200) {
					clearInterval(refId.current);
					return 200;
				} else return pr + 1;
			});
		}, 100);
	}, []);

	return (
		<>
			<Button>Продолжить</Button>
			<Input placeholder="Найти блюдо" />
			<TextArea placeholder="Привет" />
			<EmojiRadio
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<Progress value={progress} max={200} />
			<QuizOption
				label="Привет!"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<SearchDishesPanel />
			<Comment.Context.Provider
				value={{
					value: comment,
					handleChange: e => {
						setComment(e.target.value);
					},
				}}
			>
				<CommentSection />
			</Comment.Context.Provider>
			<DishFooter />
			<SEO title={`Lunch Layout`} />
		</>
	);
}
