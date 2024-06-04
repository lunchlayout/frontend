import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./progress";
import { Image } from "@shared/ui";

const meta = {
	component: Progress,
	title: "Shared/Progress",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Progress>;

type Story = StoryObj<typeof Progress>;

export const ProgressSimple: Story = {
	args: {
		value: 50,
		max: 100,
		slider: <Image src="/images/progressCar.png" width={120} />,
	},
};

export default meta;
