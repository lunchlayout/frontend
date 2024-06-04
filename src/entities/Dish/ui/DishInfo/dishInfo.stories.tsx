import type { Meta, StoryObj } from "@storybook/react";
import DishInfo from "./dishInfo";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: DishInfo,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
	],
	title: "Entities/DishInfo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishInfo>;

type Story = StoryObj<typeof DishInfo>;

export const DishInfoSimple: Story = {
	args: {},
};

export default meta;
