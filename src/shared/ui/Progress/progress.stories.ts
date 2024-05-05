import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./progress";

const meta = {
	component: Progress,
	title: "Shared/Progress",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Progress>;

type Story = StoryObj<typeof Progress>;

export const ProgressSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "progress simple",
			},
		},
	},
	args: {
		value: 50,
		max: 100,
	},
};

export default meta;
