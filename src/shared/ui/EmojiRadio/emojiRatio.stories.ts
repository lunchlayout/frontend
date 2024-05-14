import type { Meta, StoryObj } from "@storybook/react";
import EmojiRatio from "./emojiRadio";
import { fn } from "@storybook/test";

const meta = {
	component: EmojiRatio,
	title: "Shared/EmojiRatio",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof EmojiRatio>;

type Story = StoryObj<typeof EmojiRatio>;

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
