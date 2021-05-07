import { Story, Meta } from '@storybook/react/types-6-0'
import CardImg, { CardImgProps } from '.'

export default {
  title: 'CardImg',
  component: CardImg
} as Meta

export const Default: Story<CardImgProps> = (args) => <CardImg {...args} />
