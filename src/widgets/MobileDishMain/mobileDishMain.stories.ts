import type { Meta, StoryObj } from "@storybook/react";
import MobileDishMain from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileDishMain,
	title: "Widgets/MobileDishMain",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileDishMain>;

type Story = StoryObj<typeof MobileDishMain>;

export const MobileDishMainSimple: Story = {
	args: {},
};

export default meta;
