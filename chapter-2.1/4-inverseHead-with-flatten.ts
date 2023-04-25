import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { inverse } from '../chapter-2.0/0-inverse'
import { head } from './0-head'

const inverseHead = (ns: ReadonlyArray<number>) =>
  pipe(
    ns,
    head, // Option<number>
    O.map(inverse), // Option<Option<number>>
    O.flatten, // Option<number>
  )
