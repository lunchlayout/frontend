import type { Meta, StoryObj } from "@storybook/react";
import MockProvider from "./mockProvider";

const meta = {
	component: MockProvider,
	title: "Entities/CommentSection",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MockProvider>;

type Story = StoryObj<typeof MockProvider>;

export const RatingControlSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple comment section",
			},
		},
	},
	args: {},
};

export default meta;
