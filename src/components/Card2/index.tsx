import CardItem, { CardItemProps } from 'components/CardItem'
import * as S from './styles'

export type Card2Props = {
  items: CardItemProps[]
}

const Card2 = ({ items }: Card2Props) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <S.Box key={index}>
        <CardItem key={index} {...item} />
      </S.Box>
    ))}
  </S.Wrapper>
)

export default Card2
