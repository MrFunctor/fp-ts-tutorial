import { pipe } from 'fp-ts/function'

const trim = (s: string) => s.trim()

const size = (s: string) => s.length

const isAtLeast3 = (n: number) => n >= 3

pipe(
  ' hi ',
  trim, // 'hi'
  size, // 2
  isAtLeast3, // false
) // false

// same as
isAtLeast3(size(trim(' hi ')))
