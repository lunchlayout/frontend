import type { Meta, StoryObj } from "@storybook/react";
import ProgressPanel from "./progressPanel";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: ProgressPanel,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
	],
	title: "Features/ProgressPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ProgressPanel>;

type Story = StoryObj<typeof ProgressPanel>;

export const ProgressPanelSimple: Story = {
	args: {},
};

export default meta;
