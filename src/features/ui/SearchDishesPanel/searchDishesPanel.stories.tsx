import type { Meta, StoryObj } from "@storybook/react";
import SearchDishesPanel from "./searchDishesPanel";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: SearchDishesPanel,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
	],
	title: "Features/SearchDishesPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchDishesPanel>;

type Story = StoryObj<typeof SearchDishesPanel>;

export const SearchDishesPanelSimple: Story = {
	args: {},
};

export default meta;
