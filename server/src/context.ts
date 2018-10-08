import { Repository } from './repository/repository'

export class Context {
  constructor(public repository: Repository) { }
}