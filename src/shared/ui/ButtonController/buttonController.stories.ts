import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ButtonController from "./buttonController";

const meta = {
	component: ButtonController,
	title: "Shared/ButtonController",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof ButtonController>;

type Story = StoryObj<typeof ButtonController>;

export const ButtonControllerRight: Story = {

	args: {},
};
export const ButtonControllerLeft: Story = {

	args: {
		direction: "left",
	},
};

export default meta;
