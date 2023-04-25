import { flow } from 'fp-ts/function'

const concat = (s1: string, s2: string) => s1 + s2

const trim = (s: string) => s.trim()

const size = (s: string) => s.length

const isAtLeast3 = (n: number) => n >= 3

const isValid = flow(concat, trim, size, isAtLeast3)
// (s1: string, s2: string) => boolean
