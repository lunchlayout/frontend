import { Comment } from "@features/context";
import { useState } from "react";
import CommentSection from "./commentSection";

export default function MockProvider() {
	const [comment, setComment] = useState<string>("");

	return (
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
	);
}
