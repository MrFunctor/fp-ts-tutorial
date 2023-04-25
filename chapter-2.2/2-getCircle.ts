import * as O from 'fp-ts/Option';

type Circle = Readonly<{
  type: 'Circle'
  radius: number
}>

type Square = Readonly<{
  type: 'Square'
  side: number
}>

type Shape = Circle | Square

const isCircle = (s: Shape): s is Circle =>
  s.type === 'Circle'

const getCircle = O.fromPredicate(isCircle)
// (s: Shape) => Option<Circle>

const circle: Shape = { type: 'Circle', radius: 3 }
const square: Shape = { type: 'Square', side: 4 }

getCircle(circle)
// O.some(circle) typed as Option<Circle>

getCircle(square)
// O.none typed as Option<Circle>