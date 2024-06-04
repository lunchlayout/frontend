import type { Meta, StoryObj } from "@storybook/react";
import NotFoundPageContent from "./notFoundPageContent";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: NotFoundPageContent,
	title: "Widgets/NotFoundPageContent",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NotFoundPageContent>;

type Story = StoryObj<typeof NotFoundPageContent>;

export const NotFoundPageContentSimple: Story = {
	args: {},
};

export default meta;
