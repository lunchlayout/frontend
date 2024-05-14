import type { Meta, StoryObj } from "@storybook/react";
import DesktopMain from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopMain,
	title: "Widgets/DesktopMain",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopMain>;

type Story = StoryObj<typeof DesktopMain>;

export const DesktopMainSimple: Story = {
	args: {},
};

export default meta;
