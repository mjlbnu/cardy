import { Story, Meta } from '@storybook/react/types-6-0'
import CardItem, { CardItemProps } from '.'

export default {
  title: 'CardItem',
  component: CardItem
} as Meta

export const Default: Story<CardItemProps> = (args) => <CardItem {...args} />
