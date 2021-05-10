import CardImg from 'components/CardImg'
import * as S from './styles'

export type CardProps = {
  data: string
}

const Card = ({ data = '06/05/2021' }: CardProps) => (
  <S.Wrapper>
    <S.Box>
      <CardImg color="primary" />
      <S.Data>Bônus</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="primary" />
      <S.Data>Bônus</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="secondary" />
      <S.Data>{data}</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="gray" />
      <S.Data>-</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="gray" />
      <S.Data>-</S.Data>
    </S.Box>
    <S.Box>
      <CardImg color="gray" />
      <S.Data>-</S.Data>
    </S.Box>
  </S.Wrapper>
)

Card.getInitialProps = () => {
  const response = [
    {
      id: 1,
      data: '08/05/2021',
      type: 'B'
    },
    {
      id: 2,
      data: '08/05/2021',
      type: 'B'
    },
    {
      id: 3,
      data: '08/05/2021',
      type: 'B'
    },
    {
      id: 4,
      data: '08/05/2021',
      type: 'A'
    },
    {
      id: 5,
      data: '08/05/2021',
      type: 'A'
    },
    {
      id: 6,
      data: '08/05/2021',
      type: 'A'
    }
  ]
  return { dados: response }
}

export default Card
