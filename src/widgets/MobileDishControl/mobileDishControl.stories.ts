import type { Meta, StoryObj } from "@storybook/react";
import MobileDishControl from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileDishControl,
	title: "Widgets/MobileDishControl",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileDishControl>;

type Story = StoryObj<typeof MobileDishControl>;

export const MobileDishControlSimple: Story = {
	args: {},
};

export default meta;
