import { flow } from 'fp-ts/function'

const size = (s: string) => s.length

const isAtLeast3 = (n: number) => n >= 3

const isLongEnough = flow(size, isAtLeast3) // (s: string) => boolean

isLongEnough('hello') // true
