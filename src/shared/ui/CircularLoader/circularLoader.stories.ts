import type { Meta, StoryObj } from "@storybook/react";
import CircularLoader from "./circularLoader";

const meta = {
	component: CircularLoader,
	title: "Shared/CircularLoader",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CircularLoader>;

type Story = StoryObj<typeof CircularLoader>;

export const CircularLoaderSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "Constructed with mui (material ui)",
			},
		},
	},
	args: {
		open: true,
	},
};

export default meta;
