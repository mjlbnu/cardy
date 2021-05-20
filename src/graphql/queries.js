import { gql } from '@apollo/client'

const GET_ATTENDANCES = gql`
  query ATTENDANCES {
    atendimentos {
      id
      date: data
    }
  }
`

export { GET_ATTENDANCES }
