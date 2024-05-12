import type { Meta, StoryObj } from "@storybook/react";
import DesktopDishMain from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopDishMain,
	title: "Widgets/DesktopDishMain",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopDishMain>;

type Story = StoryObj<typeof DesktopDishMain>;

export const DesktopDishMainSimple: Story = {
	args: {},
};

export default meta;
