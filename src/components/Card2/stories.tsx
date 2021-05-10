import { Story, Meta } from '@storybook/react/types-6-0'
import Card2, { Card2Props } from '.'

const items = [
  {
    color: 'secondary',
    size: 'normal',
    date: '09/05/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '10/05/2021'
  },
  {
    color: 'primary',
    size: 'normal',
    date: '11/05/2021'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '12/05/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '09/05/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '10/05/2021'
  },
  {
    color: 'primary',
    size: 'normal',
    date: '11/05/2021'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '12/05/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '09/05/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '10/05/2021'
  },
  {
    color: 'primary',
    size: 'normal',
    date: '11/05/2021'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '12/05/2021'
  }
]

export default {
  title: 'Card2',
  component: Card2,
  args: { items }
} as Meta

export const Default: Story<Card2Props> = (args) => <Card2 {...args} />
