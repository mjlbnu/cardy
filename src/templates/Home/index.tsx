import Card2 from 'components/Card2'
import { CardItemProps } from 'components/CardItem'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'

export type HomeTemplateProps = {
  items: CardItemProps[]
}

const Home = ({ items }: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    <S.SectionCard>
      <Container>
        <S.SectionThis>
          <Heading lineLeft lineColor="secondary" color="black">
            This is Cardy
          </Heading>
        </S.SectionThis>
        <Card2 items={items} />
      </Container>
    </S.SectionCard>

    <Container>
      <S.SectionWhy>
        <Heading lineLeft lineColor="secondary">
          Why Cardy
        </Heading>
      </S.SectionWhy>
    </Container>

    <Container>
      <S.SectionWho>
        <Heading lineLeft lineColor="secondary">
          Who’s Using Cardy
        </Heading>
      </S.SectionWho>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
