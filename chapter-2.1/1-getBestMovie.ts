import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { head } from './0-head'

const getBestMovie = (titles: ReadonlyArray<string>): O.Option<string> =>
  pipe(
    titles,
    head, // Option<string>
    O.map((s) => s.toUpperCase()),
    O.map((s) => `Best - ${s}`),
  )

getBestMovie(['An American in Rome', 'Winter Holidays'])
// O.some('Best - AN AMERICAN IN ROME')

getBestMovie([])
// O.none
