import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "./closeButton";

const meta = {
	component: CloseButton,
	title: "Shared/CloseButton",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CloseButton>;

type Story = StoryObj<typeof CloseButton>;

export const ButtonClosePrimary: Story = {

	args: {
		customType: "primary",
	},
};
export const ButtonCloseSecondary: Story = {

	args: {
		customType: "secondary",
	},
};
export const ButtonCloseTertiary: Story = {

	args: {
		customType: "tertiary",
	},
};
export const ButtonCloseSimple: Story = {

	args: {
		customType: "simple",
	},
};
export const ButtonDisabled: Story = {

	args: {
		customType: "primary",
		disabled: true,
	},
};

export default meta;
