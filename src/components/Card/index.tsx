import CardImg from 'components/CardImg'
import * as S from './styles'

export type CardProps = {
  data: string
}

const Card = ({ data = '06/05/2021' }: CardProps) => (
  <S.Wrapper>
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
  </S.Wrapper>
)

export default Card
