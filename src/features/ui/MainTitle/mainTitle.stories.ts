import type { Meta, StoryObj } from "@storybook/react";
import MainTitle from "./mainTitle";

const meta = {
	component: MainTitle,
	title: "Features/MainTitle",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MainTitle>;

type Story = StoryObj<typeof MainTitle>;

export const MainTitleSimple: Story = {

	args: {},
};

export default meta;
