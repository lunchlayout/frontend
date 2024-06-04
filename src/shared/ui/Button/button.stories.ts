import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./button";

const meta = {
	component: Button,
	title: "Shared/Button",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const ButtonFilled: Story = {
	args: {
		children: "Отправить",
		customType: "filled",
	},
};
export const ButtonOutlined: Story = {
	args: {
		children: "Отправить",
		customType: "outlined",
	},
};
export const ButtonDisabled: Story = {
	args: {
		children: "Отправить",
		customType: "filled",
		disabled: true,
	},
};

export default meta;
