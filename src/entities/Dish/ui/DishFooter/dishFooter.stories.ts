import type { Meta, StoryObj } from "@storybook/react";
import DishFooter from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DishFooter,
	title: "Entities/DishFooter",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishFooter>;

type Story = StoryObj<typeof DishFooter>;

export const DishFooterSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple dish footer",
			},
		},
	},
	args: {},
};

export default meta;
