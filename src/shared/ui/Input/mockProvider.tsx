import { useState } from "react";

import { IInputProps } from "./input.props";
import Input from "./input";

export default function MockProvider(props: IInputProps) {
	const [value, setValue] = useState("");

	return (
		<Input
			{...props}
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	);
}
