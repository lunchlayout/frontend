import type {Meta, StoryObj} from '@storybook/react'
import ReviewLink from './reviewLink'


const meta = {
    component: ReviewLink,
    title: 'Features/ReviewLink',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ReviewLink>

type Story = StoryObj<typeof ReviewLink>;

export const ReviewLinkSimple: Story = {
    parameters: {
      docs: {
        description: {
            story: "simple review link"
        },
      },
    },
    args: {}
}

export default meta;