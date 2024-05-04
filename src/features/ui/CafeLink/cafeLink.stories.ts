import type {Meta, StoryObj} from '@storybook/react'
import CafeLink from './cafeLink'


const meta = {
    component: CafeLink,
    title: 'Features/CafeLink',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof CafeLink>

type Story = StoryObj<typeof CafeLink>;

export const CafeLinkSimple: Story = {
    parameters: {
      docs: {
        description: {
            story: "simple cafe link"
        },
      },
    },
    args: {
      cafeId: "f2j4gh82ghi01n"
    }
}

export default meta;