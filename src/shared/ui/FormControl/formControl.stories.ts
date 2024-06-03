import type { Meta, StoryObj } from "@storybook/react";
import FormControl from "./formControl";

const meta = {
	component: FormControl,
	title: "Shared/FormControl",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof FormControl>;

type Story = StoryObj<typeof FormControl>;

export const FormControlSimple: Story = {
	args: {},
};

export default meta;
