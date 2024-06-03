import type { Meta, StoryObj } from "@storybook/react";
import CommonNavigation from "./commonNavigation";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: CommonNavigation,
	title: "Features/CommonNavigation",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CommonNavigation>;

type Story = StoryObj<typeof CommonNavigation>;

export const CommonNavigationSimple: Story = {
	args: {},
};

export default meta;
