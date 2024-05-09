import type { Meta, StoryObj } from "@storybook/react";
import MobileCafeHeader from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileCafeHeader,
	title: "Widgets/MobileCafeHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileCafeHeader>;

type Story = StoryObj<typeof MobileCafeHeader>;

export const MobileCafeHeaderSimple: Story = {
	args: {},
};

export default meta;
