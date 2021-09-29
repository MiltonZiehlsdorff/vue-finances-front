import apollo, { onLogin } from '@/plugins/apollo'
import LoginMutation from './../graphql/Login.gql'
import SignUpMutation from './../graphql/SignUp.gql'
import UserQuery from './../graphql/User.gql'

const login = async variables => {
  console.log('auth-service-1')
  const response = await apollo.mutate({
    mutation: LoginMutation,
    variables
  })
  const { login } = response.data
  console.log('auth-service-2')
  await onLogin(apollo, login.token)
  return login // response.data.login
}

const signup = async variables => {
  console.log('auth-service--signup-3')
  const response = await apollo.mutate({
    mutation: SignUpMutation,
    variables
  })
  const { signup } = response.data
  console.log('auth-service-4')
  await onLogin(apollo, signup.token)
  return signup // response.data.login
}

const user = async (options = {}) => {
  console.log('auth-service-5')
  const response = await apollo.query({
    query: UserQuery,
    ...options
  })
  console.log('auth-service-6: ', response.data.user)
  return response.data.user
}

export default {
  login,
  signup,
  user
}
