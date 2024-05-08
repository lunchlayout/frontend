import type { Meta, StoryObj } from "@storybook/react";
import ReviewTextLink from "./reviewTextLink";

const meta = {
	component: ReviewTextLink,
	title: "Entities/ReviewTextLink",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ReviewTextLink>;

type Story = StoryObj<typeof ReviewTextLink>;

export const ReviewTextLinkSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple review text link",
			},
		},
	},
	args: {},
};

export default meta;
