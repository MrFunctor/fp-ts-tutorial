import * as O from 'fp-ts/Option'

export const head = <A>(as: ReadonlyArray<A>): O.Option<A> =>
  as.length === 0 ? O.none : O.some(as[0])

head([5, 6, 7]) // O.some(5)
head([]) // O.none
