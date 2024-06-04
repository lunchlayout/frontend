import type { Meta, StoryObj } from "@storybook/react";
import SearchPanelByDishId from "./searchPanelByDishId";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: SearchPanelByDishId,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	title: "Widgets/SearchPanelByDishId",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchPanelByDishId>;

type Story = StoryObj<typeof SearchPanelByDishId>;

export const SearchPanelByDishIdSimple: Story = {
	args: {},
};

export default meta;
