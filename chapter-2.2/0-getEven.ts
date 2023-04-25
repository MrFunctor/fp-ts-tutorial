import * as O from 'fp-ts/Option'

const isEven = (a: number) => a % 2 === 0

const getEven = O.fromPredicate(isEven)

getEven(4) // O.some(4)
getEven(5) // O.none
