import type { Meta, StoryObj } from "@storybook/react";
import QRLink from "./qrLink";
const meta = {
	component: QRLink,
	title: "Shared/QRLink",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof QRLink>;

type Story = StoryObj<typeof QRLink>;

export const QRLinkSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple QR link",
			},
		},
	},
	args: {
		src: "/dishes/12345/ar",
		label: "Отсканируйте QR код для просмотра блюда в AR",
	},
};

export default meta;
