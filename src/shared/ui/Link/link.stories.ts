import type { Meta, StoryObj } from "@storybook/react";
import Link from "./link";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: Link,
	title: "Shared/Link",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const LinkOutlined: Story = {
	args: {
		type: "outlined",
		children: "Найти блюдо",
	},
};
export const LinkText: Story = {
	args: {
		type: "text",
		children: "Найти блюдо",
	},
};
export const LinkUnderlined: Story = {
	args: {
		type: "underlined",
		children: "Найти блюдо",
	},
};

export default meta;
