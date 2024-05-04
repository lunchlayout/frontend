import type {Meta, StoryObj} from '@storybook/react'
import MockProvider from './mockProvider'


const meta = {
    component: MockProvider,
    title: 'Features/RatingControl',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof MockProvider>

type Story = StoryObj<typeof MockProvider>;

export const RatingControlSimple: Story = {
  parameters: {
    docs: {
      description: {
          story: "simple rating control"
      },
    },
  },
  args: {}
}

export default meta;