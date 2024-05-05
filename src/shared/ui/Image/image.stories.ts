import type { Meta, StoryObj } from "@storybook/react";
import Image from "./image";

const meta = {
	component: Image,
	title: "Shared/Image",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const ImageSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple image",
			},
		},
	},
	args: {
		src: "https://nutstime.ru/wp-content/uploads/2020/01/coffee-kofe-kapuchino-penka-zerna-chashka.jpg",
		height: 200,
		width: 200,
	},
};

export default meta;
