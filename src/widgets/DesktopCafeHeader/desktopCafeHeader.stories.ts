import type { Meta, StoryObj } from "@storybook/react";
import DesktopCafeHeader from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopCafeHeader,
	title: "Widgets/DesktopCafeHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopCafeHeader>;

type Story = StoryObj<typeof DesktopCafeHeader>;

export const DesktopCafeHeaderSimple: Story = {
	args: {},
};

export default meta;
