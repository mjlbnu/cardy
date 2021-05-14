import Home, { HomeTemplateProps } from 'templates/Home'
import cardMock from 'components/Card2/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// WARNING:
// methods getStaticProps/getServerSideProps only work on pages

// getStaticProps => generates static at build time
// getServerSideProps => generates with ssr for each request
export function getServerSideProps() {
  // logic/calcs/context
  // fetch data from api

  // return of data
  return {
    props: {
      items: cardMock
    }
  }
}
