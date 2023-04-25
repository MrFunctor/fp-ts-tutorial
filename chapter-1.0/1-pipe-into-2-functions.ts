import { pipe } from 'fp-ts/function'

const size = (s: string) => s.length

const isAtLeast3 = (n: number) => n >= 3

pipe(
  'hello',
  size, // 5
  isAtLeast3, // true
) // true

// same as
isAtLeast3(size('hello'))
