import type { Meta, StoryObj } from "@storybook/react";
import DesktopDishControl from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopDishControl,
	title: "Widgets/DesktopDishControl",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopDishControl>;

type Story = StoryObj<typeof DesktopDishControl>;

export const DesktopDishControlSimple: Story = {
	args: {},
};

export default meta;
