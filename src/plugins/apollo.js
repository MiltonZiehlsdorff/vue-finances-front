import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost'

const AUTH_TOKEN = 'apollo-token'

const resetApolloClient = async apollo => {
  try {
    await apollo.resetStore()
  } catch (e) {
    console.log('%cError on cache reset', 'color: orange;', e.message)
  }
}

const onLogin = async (apollo, token) => {
  console.log('apollo-const onLogin-1')
  if (typeof window.localStorage !== 'undefined' && token) {
    console.log('apollo-const onLogin-2')
    window.localStorage.setItem(AUTH_TOKEN, token)
    console.log('apollo-const onLogin-3')
  }
  console.log('apollo-const onLogin-4')
  await resetApolloClient(apollo)
}
const onLogout = async apollo => {
  if (typeof window.localStorage !== 'undefined') {
    window.localStorage.removeItem(AUTH_TOKEN)
  }
  await resetApolloClient(apollo)
}

const link = new HttpLink({
  uri: process.env.VUE_APP_API_URL || 'http://localhost:3000'
})

const authLink = new ApolloLink((operation, forward) => {
  const { headers } = operation.getContext()
  operation.setContext({
    headers: {
      ...headers,
      'Authorization': `Bearer ${window.localStorage.getItem(AUTH_TOKEN)}`
    }
  })
  return forward(operation)
})

const apollo = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    link
  ]),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV !== 'production'
})

export default apollo

export {
  AUTH_TOKEN,
  onLogin,
  onLogout
}
