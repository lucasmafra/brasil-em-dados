export const typeDefs = /* GraphQL */ `type AggregateCategory {
  count: Int!
}

type AggregateStatistic {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  slug: String!
  title: String!
  description: String
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  slug: String!
  title: String!
  description: String
  statistics: StatisticCreateManyWithoutCategoryInput
}

input CategoryCreateOneWithoutStatisticsInput {
  create: CategoryCreateWithoutStatisticsInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutStatisticsInput {
  slug: String!
  title: String!
  description: String
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  slug_ASC
  slug_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  slug: String!
  title: String!
  description: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  slug: String
  title: String
  description: String
  statistics: StatisticUpdateManyWithoutCategoryInput
}

input CategoryUpdateOneRequiredWithoutStatisticsInput {
  create: CategoryCreateWithoutStatisticsInput
  update: CategoryUpdateWithoutStatisticsDataInput
  upsert: CategoryUpsertWithoutStatisticsInput
  connect: CategoryWhereUniqueInput
}

input CategoryUpdateWithoutStatisticsDataInput {
  slug: String
  title: String
  description: String
}

input CategoryUpsertWithoutStatisticsInput {
  update: CategoryUpdateWithoutStatisticsDataInput!
  create: CategoryCreateWithoutStatisticsInput!
}

input CategoryWhereInput {
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  statistics_every: StatisticWhereInput
  statistics_some: StatisticWhereInput
  statistics_none: StatisticWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  slug: String
}

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createStatistic(data: StatisticCreateInput!): Statistic!
  updateStatistic(data: StatisticUpdateInput!, where: StatisticWhereUniqueInput!): Statistic
  updateManyStatistics(data: StatisticUpdateInput!, where: StatisticWhereInput): BatchPayload!
  upsertStatistic(where: StatisticWhereUniqueInput!, create: StatisticCreateInput!, update: StatisticUpdateInput!): Statistic!
  deleteStatistic(where: StatisticWhereUniqueInput!): Statistic
  deleteManyStatistics(where: StatisticWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  statistic(where: StatisticWhereUniqueInput!): Statistic
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic]!
  statisticsConnection(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatisticConnection!
  node(id: ID!): Node
}

type Statistic {
  slug: String!
  shortTitle: String!
  title: String!
  description: String!
  dataAvailable: Boolean!
  xLabel: String!
  yLabel: String!
  xHeader: String!
  yHeader: String!
  source: String!
  dataURL: String!
  category: Category!
}

type StatisticConnection {
  pageInfo: PageInfo!
  edges: [StatisticEdge]!
  aggregate: AggregateStatistic!
}

input StatisticCreateInput {
  slug: String!
  shortTitle: String!
  title: String!
  description: String!
  dataAvailable: Boolean!
  xLabel: String!
  yLabel: String!
  xHeader: String!
  yHeader: String!
  source: String!
  dataURL: String!
  category: CategoryCreateOneWithoutStatisticsInput!
}

input StatisticCreateManyWithoutCategoryInput {
  create: [StatisticCreateWithoutCategoryInput!]
  connect: [StatisticWhereUniqueInput!]
}

input StatisticCreateWithoutCategoryInput {
  slug: String!
  shortTitle: String!
  title: String!
  description: String!
  dataAvailable: Boolean!
  xLabel: String!
  yLabel: String!
  xHeader: String!
  yHeader: String!
  source: String!
  dataURL: String!
}

type StatisticEdge {
  node: Statistic!
  cursor: String!
}

enum StatisticOrderByInput {
  slug_ASC
  slug_DESC
  shortTitle_ASC
  shortTitle_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  dataAvailable_ASC
  dataAvailable_DESC
  xLabel_ASC
  xLabel_DESC
  yLabel_ASC
  yLabel_DESC
  xHeader_ASC
  xHeader_DESC
  yHeader_ASC
  yHeader_DESC
  source_ASC
  source_DESC
  dataURL_ASC
  dataURL_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StatisticPreviousValues {
  slug: String!
  shortTitle: String!
  title: String!
  description: String!
  dataAvailable: Boolean!
  xLabel: String!
  yLabel: String!
  xHeader: String!
  yHeader: String!
  source: String!
  dataURL: String!
}

type StatisticSubscriptionPayload {
  mutation: MutationType!
  node: Statistic
  updatedFields: [String!]
  previousValues: StatisticPreviousValues
}

input StatisticSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StatisticWhereInput
  AND: [StatisticSubscriptionWhereInput!]
  OR: [StatisticSubscriptionWhereInput!]
  NOT: [StatisticSubscriptionWhereInput!]
}

input StatisticUpdateInput {
  slug: String
  shortTitle: String
  title: String
  description: String
  dataAvailable: Boolean
  xLabel: String
  yLabel: String
  xHeader: String
  yHeader: String
  source: String
  dataURL: String
  category: CategoryUpdateOneRequiredWithoutStatisticsInput
}

input StatisticUpdateManyWithoutCategoryInput {
  create: [StatisticCreateWithoutCategoryInput!]
  delete: [StatisticWhereUniqueInput!]
  connect: [StatisticWhereUniqueInput!]
  disconnect: [StatisticWhereUniqueInput!]
  update: [StatisticUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [StatisticUpsertWithWhereUniqueWithoutCategoryInput!]
}

input StatisticUpdateWithoutCategoryDataInput {
  slug: String
  shortTitle: String
  title: String
  description: String
  dataAvailable: Boolean
  xLabel: String
  yLabel: String
  xHeader: String
  yHeader: String
  source: String
  dataURL: String
}

input StatisticUpdateWithWhereUniqueWithoutCategoryInput {
  where: StatisticWhereUniqueInput!
  data: StatisticUpdateWithoutCategoryDataInput!
}

input StatisticUpsertWithWhereUniqueWithoutCategoryInput {
  where: StatisticWhereUniqueInput!
  update: StatisticUpdateWithoutCategoryDataInput!
  create: StatisticCreateWithoutCategoryInput!
}

input StatisticWhereInput {
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  shortTitle: String
  shortTitle_not: String
  shortTitle_in: [String!]
  shortTitle_not_in: [String!]
  shortTitle_lt: String
  shortTitle_lte: String
  shortTitle_gt: String
  shortTitle_gte: String
  shortTitle_contains: String
  shortTitle_not_contains: String
  shortTitle_starts_with: String
  shortTitle_not_starts_with: String
  shortTitle_ends_with: String
  shortTitle_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dataAvailable: Boolean
  dataAvailable_not: Boolean
  xLabel: String
  xLabel_not: String
  xLabel_in: [String!]
  xLabel_not_in: [String!]
  xLabel_lt: String
  xLabel_lte: String
  xLabel_gt: String
  xLabel_gte: String
  xLabel_contains: String
  xLabel_not_contains: String
  xLabel_starts_with: String
  xLabel_not_starts_with: String
  xLabel_ends_with: String
  xLabel_not_ends_with: String
  yLabel: String
  yLabel_not: String
  yLabel_in: [String!]
  yLabel_not_in: [String!]
  yLabel_lt: String
  yLabel_lte: String
  yLabel_gt: String
  yLabel_gte: String
  yLabel_contains: String
  yLabel_not_contains: String
  yLabel_starts_with: String
  yLabel_not_starts_with: String
  yLabel_ends_with: String
  yLabel_not_ends_with: String
  xHeader: String
  xHeader_not: String
  xHeader_in: [String!]
  xHeader_not_in: [String!]
  xHeader_lt: String
  xHeader_lte: String
  xHeader_gt: String
  xHeader_gte: String
  xHeader_contains: String
  xHeader_not_contains: String
  xHeader_starts_with: String
  xHeader_not_starts_with: String
  xHeader_ends_with: String
  xHeader_not_ends_with: String
  yHeader: String
  yHeader_not: String
  yHeader_in: [String!]
  yHeader_not_in: [String!]
  yHeader_lt: String
  yHeader_lte: String
  yHeader_gt: String
  yHeader_gte: String
  yHeader_contains: String
  yHeader_not_contains: String
  yHeader_starts_with: String
  yHeader_not_starts_with: String
  yHeader_ends_with: String
  yHeader_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  dataURL: String
  dataURL_not: String
  dataURL_in: [String!]
  dataURL_not_in: [String!]
  dataURL_lt: String
  dataURL_lte: String
  dataURL_gt: String
  dataURL_gte: String
  dataURL_contains: String
  dataURL_not_contains: String
  dataURL_starts_with: String
  dataURL_not_starts_with: String
  dataURL_ends_with: String
  dataURL_not_ends_with: String
  category: CategoryWhereInput
  AND: [StatisticWhereInput!]
  OR: [StatisticWhereInput!]
  NOT: [StatisticWhereInput!]
}

input StatisticWhereUniqueInput {
  slug: String
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  statistic(where: StatisticSubscriptionWhereInput): StatisticSubscriptionPayload
}
`