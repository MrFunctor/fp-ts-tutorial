import * as O from 'fp-ts/Option'

const value1: number | null = 3
const value2: number | null = null

O.fromNullable(value1) // O.some(3)
O.fromNullable(value2) // O.none
