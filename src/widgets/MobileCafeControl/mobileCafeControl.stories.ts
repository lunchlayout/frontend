import type { Meta, StoryObj } from "@storybook/react";
import MobileCafeControl from "./mobileCafeControl";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileCafeControl,
	title: "Widgets/MobileCafeControl",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileCafeControl>;

type Story = StoryObj<typeof MobileCafeControl>;

export const MobileCafeControlSimple: Story = {
	args: {},
};

export default meta;
