import type { Meta, StoryObj } from "@storybook/react";
import MobileDishFooter from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileDishFooter,
	title: "Widgets/MobileDishFooter",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileDishFooter>;

type Story = StoryObj<typeof MobileDishFooter>;

export const MobileDishFooterSimple: Story = {
	args: {},
};

export default meta;
