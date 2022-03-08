import React from "react"
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = createHttpLink({
  uri: process.env.GATSBY_HASURA_BASE_URL,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
