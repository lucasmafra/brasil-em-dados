import { Prisma } from './database/generated/prisma'

export class Context {
  constructor(public repository: Prisma) { }
}