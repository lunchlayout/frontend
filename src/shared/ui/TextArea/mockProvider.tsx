import { useState } from "react";
import TextArea from "./textarea";
import { ITextAreaProps } from "./textarea.props";

export default function MockProvider(props: ITextAreaProps) {
	const [value, setValue] = useState("");

	return (
		<TextArea
			{...props}
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	);
}
