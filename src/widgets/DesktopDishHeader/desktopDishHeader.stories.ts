import type { Meta, StoryObj } from "@storybook/react";
import DesktopDishHeader from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopDishHeader,
	title: "Widgets/DesktopDishHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopDishHeader>;

type Story = StoryObj<typeof DesktopDishHeader>;

export const DesktopDishHeaderSimple: Story = {
	args: {},
};

export default meta;
