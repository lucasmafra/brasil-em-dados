export const typeDefs = /* GraphQL */ `type AggregateCategory {
  count: Int!
}

type AggregatePoint {
  count: Int!
}

type AggregateStatistic {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  title: String!
  description: String
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  title: String!
  description: String
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
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

input CategoryUpdateDataInput {
  title: String
  description: String
}

input CategoryUpdateInput {
  title: String
  description: String
}

input CategoryUpdateOneRequiredInput {
  create: CategoryCreateInput
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
  connect: CategoryWhereUniqueInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
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
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createPoint(data: PointCreateInput!): Point!
  updateManyPoints(data: PointUpdateInput!, where: PointWhereInput): BatchPayload!
  deleteManyPoints(where: PointWhereInput): BatchPayload!
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

type Point {
  xValue: Float!
  yValue: Float!
}

type PointConnection {
  pageInfo: PageInfo!
  edges: [PointEdge]!
  aggregate: AggregatePoint!
}

input PointCreateInput {
  xValue: Float!
  yValue: Float!
}

input PointCreateManyInput {
  create: [PointCreateInput!]
}

type PointEdge {
  node: Point!
  cursor: String!
}

enum PointOrderByInput {
  xValue_ASC
  xValue_DESC
  yValue_ASC
  yValue_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PointPreviousValues {
  xValue: Float!
  yValue: Float!
}

type PointSubscriptionPayload {
  mutation: MutationType!
  node: Point
  updatedFields: [String!]
  previousValues: PointPreviousValues
}

input PointSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PointWhereInput
  AND: [PointSubscriptionWhereInput!]
  OR: [PointSubscriptionWhereInput!]
  NOT: [PointSubscriptionWhereInput!]
}

input PointUpdateInput {
  xValue: Float
  yValue: Float
}

input PointUpdateManyInput {
  create: [PointCreateInput!]
}

input PointWhereInput {
  xValue: Float
  xValue_not: Float
  xValue_in: [Float!]
  xValue_not_in: [Float!]
  xValue_lt: Float
  xValue_lte: Float
  xValue_gt: Float
  xValue_gte: Float
  yValue: Float
  yValue_not: Float
  yValue_in: [Float!]
  yValue_not_in: [Float!]
  yValue_lt: Float
  yValue_lte: Float
  yValue_gt: Float
  yValue_gte: Float
  AND: [PointWhereInput!]
  OR: [PointWhereInput!]
  NOT: [PointWhereInput!]
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  points(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Point]!
  pointsConnection(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PointConnection!
  statistic(where: StatisticWhereUniqueInput!): Statistic
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic]!
  statisticsConnection(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatisticConnection!
  node(id: ID!): Node
}

type Statistic {
  id: ID!
  slug: String!
  shortTitle: String!
  title: String!
  description: String!
  xLabel: String!
  yLabel: String!
  source: String!
  category: Category!
  points(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Point!]
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
  xLabel: String!
  yLabel: String!
  source: String!
  category: CategoryCreateOneInput!
  points: PointCreateManyInput
}

type StatisticEdge {
  node: Statistic!
  cursor: String!
}

enum StatisticOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  shortTitle_ASC
  shortTitle_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  xLabel_ASC
  xLabel_DESC
  yLabel_ASC
  yLabel_DESC
  source_ASC
  source_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StatisticPreviousValues {
  id: ID!
  slug: String!
  shortTitle: String!
  title: String!
  description: String!
  xLabel: String!
  yLabel: String!
  source: String!
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
  xLabel: String
  yLabel: String
  source: String
  category: CategoryUpdateOneRequiredInput
  points: PointUpdateManyInput
}

input StatisticWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
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
  category: CategoryWhereInput
  points_every: PointWhereInput
  points_some: PointWhereInput
  points_none: PointWhereInput
  AND: [StatisticWhereInput!]
  OR: [StatisticWhereInput!]
  NOT: [StatisticWhereInput!]
}

input StatisticWhereUniqueInput {
  id: ID
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  point(where: PointSubscriptionWhereInput): PointSubscriptionPayload
  statistic(where: StatisticSubscriptionWhereInput): StatisticSubscriptionPayload
}
`