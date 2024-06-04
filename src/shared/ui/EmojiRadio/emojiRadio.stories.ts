import type { Meta, StoryObj } from "@storybook/react";
import EmojiRadio from "./emojiRadio";
import { fn } from "@storybook/test";

const meta = {
	component: EmojiRadio,
	title: "Shared/EmojiRadio",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof EmojiRadio>;

type Story = StoryObj<typeof EmojiRadio>;

export const EmojiHappy: Story = {
	args: {
		emoji: "happy",
		checked: true,
	},
};
export const EmojiGood: Story = {
	args: {
		emoji: "good",
	},
};
export const EmojiNormal: Story = {
	args: {
		emoji: "normal",
	},
};

export const EmojiBad: Story = {
	args: {
		emoji: "bad",
	},
};

export default meta;
