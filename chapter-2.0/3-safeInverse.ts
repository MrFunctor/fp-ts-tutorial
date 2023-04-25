import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { inverse } from './0-inverse'

const safeInverse = (x: number): number =>
  pipe(
    x,
    inverse, // Option<number>
    O.getOrElse(() => 0), // number
  )

safeInverse(0) // 0
safeInverse(2) // 0.5
