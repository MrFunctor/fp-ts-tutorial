import * as O from 'fp-ts/Option'
import { inverse } from './0-inverse'

const getUiMessageWithInverse = (x: number): string =>
  pipe(
    x,
    inverse, // Option<number>
    O.match(
      () => `Cannot get the inverse of ${x}.`,
      (ix) => `The inverse of ${x} is ${ix}.`,
    ), // string
  )

getUiMessageWithInverse(0) // "Cannot get the inverse of 0."
getUiMessageWithInverse(2) // "The inverse of 2 is 0.5."
