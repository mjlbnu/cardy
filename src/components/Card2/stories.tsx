import { Story, Meta } from '@storybook/react/types-6-0'
import Card2, { Card2Props } from '.'

import items from './mock'

export default {
  title: 'Card2',
  component: Card2,
  args: { items }
} as Meta

export const Default: Story<Card2Props> = (args) => <Card2 {...args} />
