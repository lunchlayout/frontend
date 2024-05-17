import type { Meta, StoryObj } from "@storybook/react";
import Link from "./link";

const meta = {
	component: Link,
	title: "Shared/Link",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const LinkPrimary: Story = {

	args: {
		type: "primary",
		children: "Ввести код",
	},
};
export const LinkSecondary: Story = {

	args: {
		type: "secondary",
		children: "Ввести код",
	},
};
export const LinkTertiary: Story = {

	args: {
		type: "tertiary",
		children: "Ввести код",
	},
};
export const LinkSimple: Story = {

	args: {
		type: "simple",
		children: "Ввести код",
	},
};
export const LinkText: Story = {

	args: {
		type: "text",
		children: "Ввести код",
	},
};
export default meta;
