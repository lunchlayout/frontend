import type { Meta, StoryObj } from "@storybook/react";
import MainLink from "./mainLink";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MainLink,
	decorators: [withRouter()],
	title: "Features/MainLink",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MainLink>;

type Story = StoryObj<typeof MainLink>;

export const MainLinkSimple: Story = {
	args: {},
};

export default meta;
