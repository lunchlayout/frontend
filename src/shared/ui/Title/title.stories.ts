import type { Meta, StoryObj } from "@storybook/react";
import Title from "./title";
const meta = {
	component: Title,
	title: "Shared/Title",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Title1: Story = {

	args: {
		level: 1,
		children: "Lunch Layout",
	},
};
export const Title2: Story = {

	args: {
		level: 2,
		children: "Lunch Layout",
	},
};
export const Title3: Story = {

	args: {
		level: 3,
		children: "Lunch Layout",
	},
};

export default meta;
