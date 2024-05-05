import { Comment } from "@features/context";
import { FormSection, TextArea } from "@shared/ui";
import styles from "./commentSection.module.scss";

export default function CommentSection() {
	const { value, handleChange } = Comment.useContext();

	return (
		<FormSection title="Что вы думаете о нас?">
			<TextArea
				className={styles.textarea}
				value={value}
				onChange={handleChange}
			/>
		</FormSection>
	);
}
