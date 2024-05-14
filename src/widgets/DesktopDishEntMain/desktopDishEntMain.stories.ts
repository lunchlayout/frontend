import type { Meta, StoryObj } from "@storybook/react";
import DesktopDishEntMain from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopDishEntMain,
	title: "Widgets/DesktopDishEntMain",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopDishEntMain>;

type Story = StoryObj<typeof DesktopDishEntMain>;

export const DesktopDishEntMainSimple: Story = {
	args: {},
};

export default meta;
