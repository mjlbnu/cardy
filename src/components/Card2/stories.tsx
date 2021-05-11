import { Story, Meta } from '@storybook/react/types-6-0'
import Card2, { Card2Props } from '.'

const items = [
  {
    color: 'primary',
    size: 'normal',
    date: '09/05/2021'
  },
  {
    color: 'primary',
    size: 'normal',
    date: '10/06/2021'
  },
  {
    color: 'primary',
    size: 'normal',
    date: '11/07/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '12/08/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '09/09/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '10/10/2021'
  },
  {
    color: 'secondary',
    size: 'normal',
    date: '11/11/2021'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '-'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '-'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '-'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '11/11/2021'
  },
  {
    color: 'gray',
    size: 'normal',
    date: '-'
  }
]

export default {
  title: 'Card2',
  component: Card2,
  args: { items }
} as Meta

export const Default: Story<Card2Props> = (args) => <Card2 {...args} />
