import type { Meta, StoryObj } from "@storybook/react";
import MobileDishEntMain from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileDishEntMain,
	title: "Widgets/MobileDishEntMain",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileDishEntMain>;

type Story = StoryObj<typeof MobileDishEntMain>;

export const MobileDishEntMainSimple: Story = {
	args: {},
};

export default meta;
