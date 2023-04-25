import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'

const f = (a: O.Option<number>) =>
  pipe(
    a,
    O.altW(() => O.some('fallback')) // Option<number | string>
  )
