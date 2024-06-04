import type { Meta, StoryObj } from "@storybook/react";
import PlayButton from "./playButton";

const meta = {
	component: PlayButton,
	title: "Shared/PlayButton",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof PlayButton>;

type Story = StoryObj<typeof PlayButton>;

export const PlayButtonSimple: Story = {
	args: {},
};

export default meta;
