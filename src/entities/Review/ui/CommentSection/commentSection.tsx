import { Comment } from "@features/context";
import { FormSection, TextArea } from "@shared/ui";
import styles from "./commentSection.module.scss";

export default function CommentSection() {
	const { value, handleChange } = Comment.useContext();

	return (
		<FormSection title="Есть ли у вас мысли, которыми вы бы хотели поделиться?">
			<TextArea
				className={styles.textarea}
				value={value}
				onChange={handleChange}
			/>
		</FormSection>
	);
}
