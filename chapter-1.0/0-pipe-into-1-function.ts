import { pipe } from 'fp-ts/function'

const size = (s: string) => s.length

pipe(
  'hello',
  size, // 5
) // evaluates to 5

// same as
size('hello')
