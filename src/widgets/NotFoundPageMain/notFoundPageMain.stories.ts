import type { Meta, StoryObj } from "@storybook/react";
import NotFoundPageMain from "./notFoundPageMain";

const meta = {
	component: NotFoundPageMain,
	title: "Widgets/NotFoundPageMain",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NotFoundPageMain>;

type Story = StoryObj<typeof NotFoundPageMain>;

export const NotFoundPageMainSimple: Story = {
	args: {},
};

export default meta;
