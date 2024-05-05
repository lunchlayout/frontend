import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./textarea";
import { fn } from "@storybook/test";

const meta = {
	component: TextArea,
	title: "Shared/TextArea",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const TextAreaSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "text area simple",
			},
		},
	},
	args: {
		placeholder: "Что-то еще?",
	},
};

export default meta;
