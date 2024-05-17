import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import { fn } from "@storybook/test";

const meta = {
	component: Input,
	title: "Shared/Input",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const InputPrimary: Story = {

	args: {
		placeholder: "Введите код",
		customType: "primary",
	},
};
export const InputSecondary: Story = {

	args: {
		placeholder: "Найти блюдо",
		customType: "secondary",
	},
};

export default meta;
