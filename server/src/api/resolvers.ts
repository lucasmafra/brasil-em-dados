import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'
import { TransparentError } from './error'

export default {
  Query: {
    async categories(parent, args, context: Context, info: GraphQLResolveInfo) {
      return context.repository.categories()
    },
    async statistic(parent, {slug}, context: Context, info: GraphQLResolveInfo) {
      const statistic = await context.repository.statistic({slug})
      if (!statistic) {
        throw new TransparentError('Statistic not found', 'StatisticNotFound')
      }
      return statistic
    }
  },
  Category: {
    statistics(parent, args, context: Context) {
      return context.repository.statistics({where: {category: {slug: parent.slug}}})
    }
  },
  Statistic: {
    points(parent, args, context: Context) {
      return context.repository.points({where: {statistic: parent}})
    }
  }
}