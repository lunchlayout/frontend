import type { Meta, StoryObj } from "@storybook/react";
import MobileEntryControl from "./mobileEntryControl";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileEntryControl,
	title: "Widgets/MobileEntryControl",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileEntryControl>;

type Story = StoryObj<typeof MobileEntryControl>;

export const MobileEntryControlSimple: Story = {
	args: {},
};

export default meta;
