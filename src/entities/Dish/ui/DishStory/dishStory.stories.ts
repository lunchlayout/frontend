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
	parameters: {
		docs: {
			description: {
				story: "simple dish story",
			},
		},
	},
	args: {
		description: "Клубничный торт - самый любимый десерт Павла Дурова",
		img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
	},
};

export default meta;
