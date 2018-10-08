import { prisma, Prisma } from '../database/generated/prisma'
const getCSV = require('get-csv')

export interface IPointsInput {
  where: { statistic: { slug: string } }
}

export interface IPointNode {
  xValue: string,
  yValue: string
}

export class CSVRepository {
  constructor(private db: Prisma) { }
  public async points({ where: { statistic: { slug }} }: IPointsInput): Promise<IPointNode[]> {
    const statistic = await prisma.statistic({ slug })
    const rows = await getCSV(statistic.dataURL) as object[]
    return rows.map((row) => ({
      xValue: row[statistic.xHeader],
      yValue: row[statistic.yHeader]
    }))
  }
}
