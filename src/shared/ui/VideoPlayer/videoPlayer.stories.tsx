import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "./videoPlayer";

const meta = {
	component: VideoPlayer,
	title: "Shared/VideoPlayer",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof VideoPlayer>;

type Story = StoryObj<typeof VideoPlayer>;

export const VideoPlayerSimple: Story = {
	args: {
		title: "Learn English with Movies — THE BOURNE IDENTITY",
		src: "https://www.youtube.com/watch?v=q8likKqHzbk",
	},
};

export default meta;
