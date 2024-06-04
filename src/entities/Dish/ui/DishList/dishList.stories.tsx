import type { Meta, StoryObj } from "@storybook/react";
import DishList from "./dishList";
import { mockStore } from "@app/model";
import { Provider } from "react-redux";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DishList,
	title: "Entities/DishList",
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishList>;

type Story = StoryObj<typeof DishList>;

export const DishListSimple: Story = {
	args: {},
};

export default meta;
