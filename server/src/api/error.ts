import { GraphQLError } from 'graphql'

export class TransparentError extends Error {
  public code: string
  public type = 'TransparentError'
  
  constructor(message: string, code: string) {
    super(message)
    this.code = code
  }
}

export const isTransparent = (error: any): error is TransparentError =>
  error.type === 'TransparentError'

export const formatError = (error: GraphQLError) => {
  console.log('error', error)
  return {
    ...error,
    code: isTransparent(error.originalError) ?
      error.originalError.code :
      'InternalServerError',
    message: isTransparent(error.originalError) ?
      error.originalError.message :
      'An error occurred',
  }
}
