import type { Meta, StoryObj } from "@storybook/react";
import DesktopDishNav from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopDishNav,
	title: "Features/DesktopDishNav",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopDishNav>;

type Story = StoryObj<typeof DesktopDishNav>;

export const DesktopEntryNavSimple: Story = {
	args: {},
};

export default meta;
