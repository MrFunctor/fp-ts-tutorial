import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'

type Discount = Readonly<{
  percentage: number
  expired: boolean
}>

const isDiscountValid = (discount: Discount) =>
  !discount.expired

const getDiscountText = (discount: Discount): O.Option<string> =>
  pipe(
    discount,
    O.fromPredicate(isDiscountValid),
    // Option<Discount>
    O.map(({ percentage }) => `${percentage}% DISCOUNT!`),
    // Option<string>
  )

getDiscountText({ percentage: 10, expired: false })
// O.some('10% DISCOUNT!')

getDiscountText({ percentage: 20, expired: true })
// O.none
