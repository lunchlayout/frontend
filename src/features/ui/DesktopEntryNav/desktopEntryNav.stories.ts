import type { Meta, StoryObj } from "@storybook/react";
import DesktopEntryNav from "./desktopEntryNav";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopEntryNav,
	title: "Features/DesktopEntryNav",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopEntryNav>;

type Story = StoryObj<typeof DesktopEntryNav>;

export const DesktopEntryNavSimple: Story = {
	args: {},
};

export default meta;
