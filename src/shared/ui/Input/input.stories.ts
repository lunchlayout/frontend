import type { Meta, StoryObj } from "@storybook/react";
import Input from "./mockProvider";
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

export const InputSimple: Story = {
	args: {
		placeholder: "Введите код блюда",
	},
};
export const InputWithoutOuline: Story = {
	args: {
		placeholder: "Введите код блюда",
		hasOutline: false,
	},
};

export default meta;
