import { pipe } from 'fp-ts/function'

const trim = (s: string) => s.trim()

const size = (s: string) => s.length

const isAtLeast3 = (n: number) => n >= 3

const isValid = (s: string) => pipe(
  s,
  trim,
  size,
  isAtLeast3,
)
