import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const HELLO_QUERY = gql`
  query {
    hello
  }
`

type HelloData = {
  hello: string
}

function Hello() {
  const { data, loading, error } = useQuery<HelloData>(HELLO_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return <p>{data?.hello}</p>
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <header>
          <h1>GameArena</h1>
        </header>
        <main>
          <Hello />
        </main>
      </div>
    </ApolloProvider>
  )
}
