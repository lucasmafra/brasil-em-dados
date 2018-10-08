import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

export default {
  Query: {
    async categories(parent, args, context: Context) {
      return context.repository.categories()
    },
    async statistic(parent, { id }, context: Context, info: GraphQLResolveInfo) {
      return context.repository.statistic({ id }).$fragment(info)
    }
  }
}