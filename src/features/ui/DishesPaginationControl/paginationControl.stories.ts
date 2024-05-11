import type { Meta, StoryObj } from "@storybook/react";
import PaginationControl from "./mockProvider";

const meta = {
	component: PaginationControl,
	title: "Features/PaginationControl",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof PaginationControl>;

type Story = StoryObj<typeof PaginationControl>;

export const PaginationControlSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple pagination control",
			},
		},
	},
	args: {},
};

export default meta;