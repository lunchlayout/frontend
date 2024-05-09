import type { Meta, StoryObj } from "@storybook/react";
import DishLoadedPanel from "./mockProvider";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DishLoadedPanel,
	title: "Entities/DishLoadedPanel",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishLoadedPanel>;

type Story = StoryObj<typeof DishLoadedPanel>;

export const DishLoadedPanelSimple: Story = {
	args: {},
};

export default meta;
