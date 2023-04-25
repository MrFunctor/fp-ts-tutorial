import * as O from 'fp-ts/Option'

export const inverse = (x: number): O.Option<number> =>
  x === 0 ? O.none : O.some(1 / x)

inverse(0) // O.none
inverse(2) // O.some(0.5)
