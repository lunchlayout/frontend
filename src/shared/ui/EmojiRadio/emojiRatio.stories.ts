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
	parameters: {
		docs: {
			description: {
				story: "happy emoji",
			},
		},
	},
	args: {
		emoji: "happy",
		checked: true,
	},
};
export const EmojiGood: Story = {
	parameters: {
		docs: {
			description: {
				story: "good emoji",
			},
		},
	},
	args: {
		emoji: "good",
	},
};
export const EmojiNormal: Story = {
	parameters: {
		docs: {
			description: {
				story: "normal emoji",
			},
		},
	},
	args: {
		emoji: "normal",
	},
};

export const EmojiBad: Story = {
	parameters: {
		docs: {
			description: {
				story: "bad emoji",
			},
		},
	},
	args: {
		emoji: "bad",
	},
};

export default meta;
