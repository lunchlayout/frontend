import type { Meta, StoryObj } from "@storybook/react";
import SendDishIdPanel from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: SendDishIdPanel,
	decorators: [withRouter()],
	title: "Widgets/SendDishIdPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SendDishIdPanel>;

type Story = StoryObj<typeof SendDishIdPanel>;

export const SendDishIdPanelSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple send dishId panel",
			},
		},
	},
	args: {},
};

export default meta;
