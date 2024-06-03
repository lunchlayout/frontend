import type { Meta, StoryObj } from "@storybook/react";
import EmojiRating from "./mockProvider";

const meta = {
	component: EmojiRating,
	title: "Features/EmojiRating",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof EmojiRating>;

type Story = StoryObj<typeof EmojiRating>;

export const EmojiRatingSimple: Story = {
	args: {},
};

export default meta;
