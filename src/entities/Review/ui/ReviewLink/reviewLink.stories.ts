import type { Meta, StoryObj } from "@storybook/react";
import ReviewLink from "./reviewLink";

const meta = {
	component: ReviewLink,
	title: "Entities/ReviewLink",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ReviewLink>;

type Story = StoryObj<typeof ReviewLink>;

export const ReviewLinkSimple: Story = {
	args: {},
};

export default meta;
