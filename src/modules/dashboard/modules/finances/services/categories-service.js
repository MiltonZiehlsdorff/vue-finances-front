import apollo from '@/plugins/apollo'
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

import CategoriesQuery from './../graphql/Categories.gql'
import CategoryCreateMutation from './../graphql/CategoryCreate.gql'

console.log('categories-serviceeeeee')

const categories = ({ operation } = {}) => {
  console.log('categories-service--categories')
  const queryRef = apollo.watchQuery({
    query: CategoriesQuery,
    variables: { operation: operation ? operation.toUpperCase() : operation }
  })
  return from(queryRef)
    .pipe(
      map(res => res.data.categories))
}

const createCategory = async variables => {
  const response = await apollo.mutate({
    mutation: CategoryCreateMutation,
    variables,
    update: (proxy, { data: { createCategory } }) => {
      try {
        const variables = { operation: createCategory.operation }
        console.log('variables: ', variables)
        console.log('CategoriesQuery: ', CategoriesQuery)
        const data = proxy.readQuery({
          query: CategoriesQuery,
          variables
        })

        data.categories = [...data.categories, createCategory]
        console.log('data.categories: ', data.categories)

        proxy.writeQuery({
          query: CategoriesQuery,
          variables,
          data
        })
      } catch (e) {
        console.log('Query "categoriesssss" has not been read yet!', e)
      }
    }
  })
  return response.data.createCategory
}

export default {
  categories,
  createCategory
}
