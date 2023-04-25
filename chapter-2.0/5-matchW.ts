import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

const f = (a: O.Option<number>) =>
  pipe(
    a,
    O.matchW(
      () => 0,
      (n) => `The value is ${n}!`,
    ), // number | string
  )
