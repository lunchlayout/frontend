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

export const CloseButtonSimple: Story = {
	args: {},
};

export default meta;
