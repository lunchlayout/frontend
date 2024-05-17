import type { Meta, StoryObj } from "@storybook/react";
import DishVideo from "./dishVideo";

const meta = {
	component: DishVideo,
	title: "Entities/DishVideo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishVideo>;

type Story = StoryObj<typeof DishVideo>;

export const DishVideoSimple: Story = {
	args: {
		title: "Мясная пицца от шеф-повара Дмитрия Иванова",
		link: "https://www.youtube.com/embed/6w00hjyIIQQ",
	},
};

export default meta;
