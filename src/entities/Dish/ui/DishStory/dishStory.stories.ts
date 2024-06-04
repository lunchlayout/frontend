import type { Meta, StoryObj } from "@storybook/react";
import DishStory from "./dishStory";

const meta = {
	component: DishStory,
	title: "Entities/DishStory",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishStory>;

type Story = StoryObj<typeof DishStory>;

export const DishStorySimple: Story = {
	args: {
		description:
			"Капучино — любимый напиток Павла Дурова, он пьёт его целых 30 раз в день!",
	},
};

export default meta;
