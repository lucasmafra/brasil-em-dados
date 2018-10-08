import { CSVRepository, IPointNode, IPointsInput } from './csv/csv'
import { prisma, Prisma } from './database/generated/prisma'

export type Repository = Prisma & { points: (input: IPointsInput) => Promise<IPointNode[]> }

export const repository: Repository = { points: new CSVRepository(prisma).points, ...prisma }
