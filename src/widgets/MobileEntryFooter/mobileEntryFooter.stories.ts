import type { Meta, StoryObj } from "@storybook/react";
import MobileEntryFooter from "./mobileEntryFooter";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileEntryFooter,
	title: "Widgets/MobileEntryFooter",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileEntryFooter>;

type Story = StoryObj<typeof MobileEntryFooter>;

export const MobileEntryFooterSimple: Story = {
	args: {},
};

export default meta;
