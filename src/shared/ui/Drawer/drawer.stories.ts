import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "./drawer";

const meta = {
	component: Drawer,
	title: "Shared/Drawer",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

export const DrawerSimple: Story = {
	args: {
		open: true,
	},
};

export default meta;
