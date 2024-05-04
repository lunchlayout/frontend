import type {Meta, StoryObj} from '@storybook/react'
import ModelLink from './modelLink'

import {withRouter} from 'storybook-addon-remix-react-router'

const meta = {
    component: ModelLink,
    title: 'Features/ModelLink',
    decorators: [withRouter()],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ModelLink>

type Story = StoryObj<typeof ModelLink>;

export const ModelLink3D: Story = {
    parameters: {
      docs: {
        description: {
            story: "model link 3D"
        },
      },
    },
    args: {}
}

export default meta;