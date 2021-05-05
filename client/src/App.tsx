import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { VehiclesTable } from './components/VehiclesTable';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <VehiclesTable />
  </ApolloProvider>
);
