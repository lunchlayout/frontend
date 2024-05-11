import type { Meta, StoryObj } from "@storybook/react";
import DesktopEntryHeader from "./desktopEntryHeader";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopEntryHeader,
	title: "Widgets/DesktopEntryHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopEntryHeader>;

type Story = StoryObj<typeof DesktopEntryHeader>;

export const DesktopEntryHeaderSimple: Story = {
	args: {},
};

export default meta;
