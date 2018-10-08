import { GraphQLServer } from 'graphql-yoga'
import resolvers from './api/resolvers'
import { formatError } from './api/error'
import { Context } from './context'
import { repository } from './repository/repository'

export class Server {
  
  public static async start() {
    if (!this.runningInstance) {
      this.runningInstance = await this.server.start({
        cors: {
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          optionsSuccessStatus: 204,
          origin: '*',
          preflightContinue: false,
        },
        formatError: (error: any) => formatError(error),
        port: process.env.PORT,
      })
    }
    return this.runningInstance
  }
  
  public static async stop() {
    if (!this.runningInstance) {
      return
    }
    await this.runningInstance.close()
    this.runningInstance = null
  }
  
  private static runningInstance: any = null
  
  private static server = new GraphQLServer({
    context: () => new Context(repository),
    resolvers: resolvers as any,
    typeDefs: './src/api/schema.graphql',
  })
}