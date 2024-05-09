import type { Meta, StoryObj } from "@storybook/react";
import MobileEntryHeader from "./mobileEntryHeader";

const meta = {
	component: MobileEntryHeader,
	title: "Widgets/MobileEntryHeader",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileEntryHeader>;

type Story = StoryObj<typeof MobileEntryHeader>;

export const MobileEntryHeaderSimple: Story = {
	args: {},
};

export default meta;
