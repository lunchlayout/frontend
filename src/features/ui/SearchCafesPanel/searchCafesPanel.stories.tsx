import type { Meta, StoryObj } from "@storybook/react";
import SearchCafesPanel from "./searchCafesPanel";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: SearchCafesPanel,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
	],
	title: "Features/SearchCafesPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchCafesPanel>;

type Story = StoryObj<typeof SearchCafesPanel>;

export const SearchCafesPanelSimple: Story = {
	args: {},
};

export default meta;
