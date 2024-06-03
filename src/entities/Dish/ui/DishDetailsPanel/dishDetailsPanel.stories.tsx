import type { Meta, StoryObj } from "@storybook/react";
import DishDetailsPanel from "./dishDetailsPanel";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: DishDetailsPanel,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
	],
	title: "Entities/DishDetailsPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishDetailsPanel>;

type Story = StoryObj<typeof DishDetailsPanel>;

export const DishDetailsPanelSimple: Story = {
	args: {},
};

export default meta;
