import type { Meta, StoryObj } from "@storybook/react";
import NavLink from "./navLink";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: NavLink,
	title: "Shared/NavLink",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NavLink>;

type Story = StoryObj<typeof NavLink>;

export const NavLinkActive: Story = {
	args: {
		to: "/",
		children: "Рестораны",
	},
};
export const NavLinkInactive: Story = {
	args: {
		to: "/example",
		children: "Рестораны",
	},
};

export default meta;
