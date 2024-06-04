import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./mockProvider";
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
	args: {
		label: "Отзыв",
		placeholder: "Напишите отзыв сюда",
	},
};

export default meta;
