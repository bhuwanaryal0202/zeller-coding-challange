import { gql } from '@apollo/client';

export const CUSTOMERS_QUERY = gql`      
query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
        __typename
      }
        __typename
    }
  }
`
