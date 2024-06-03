import type { Meta, StoryObj } from "@storybook/react";
import CafeCard from "./cafeCard";

const meta = {
	component: CafeCard,
	title: "Entities/CafeCard",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CafeCard>;

type Story = StoryObj<typeof CafeCard>;

export const CafeCardSimple: Story = {
	args: {
		name: "Кекс и крендель",
		logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
	},
};

export default meta;
