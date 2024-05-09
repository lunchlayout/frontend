import type { Meta, StoryObj } from "@storybook/react";
import MobileDishHeader from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileDishHeader,
	title: "Widgets/MobileDishHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileDishHeader>;

type Story = StoryObj<typeof MobileDishHeader>;

export const MobileDishHeaderSimple: Story = {
	args: {},
};

export default meta;
