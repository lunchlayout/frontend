import { FormSection } from "@shared/ui";
import { RatingControl } from "@features/ui";

export default function RatingSection() {
	return (
		<FormSection title="Что вы думаете о нас?">
			<RatingControl />
		</FormSection>
	);
}
