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
      <Card2 items={items} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        Why Cardy
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Who’s Using Cardy
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
