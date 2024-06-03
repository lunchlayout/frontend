import type { Meta, StoryObj } from "@storybook/react";
import DishesPanel from "./dishesPanel";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DishesPanel,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	title: "Widgets/DishesPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishesPanel>;

type Story = StoryObj<typeof DishesPanel>;

export const DishesPanelSimple: Story = {
	args: {},
};

export default meta;
