import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { head } from './0-head'

const toUpperCase = (s: string) => s.toUpperCase()

const addPrefix = (prefix: string) => (s: string) => prefix + s

const getBestMovie = (titles: ReadonlyArray<string>): O.Option<string> =>
  pipe(
    titles,
    head,
    O.map(toUpperCase),
    O.map(addPrefix('Best - ')),
  )
