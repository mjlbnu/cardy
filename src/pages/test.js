import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ATTENDANCES } from '../graphql/queries'

const att = ({ attList }) => {
  return (
    <div>
      <ul>
        {attList.map((att) => (
          <li key={att.id}>{att.date}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({ query: GET_ATTENDANCES })

  return {
    props: {
      attList: data.atendimentos
    }
  }
}

export default att
