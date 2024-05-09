import type { Meta, StoryObj } from "@storybook/react";
import MobileCafeFooter from "./mobileCafeFooter";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileCafeFooter,
	title: "Widgets/MobileCafeFooter",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileCafeFooter>;

type Story = StoryObj<typeof MobileCafeFooter>;

export const MobileCafeFooterSimple: Story = {
	args: {},
};

export default meta;
