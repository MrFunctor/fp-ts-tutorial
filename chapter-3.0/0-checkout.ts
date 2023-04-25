import * as E from 'fp-ts/Either';
import { pipe } from "fp-ts/function";
import { makeMatch } from 'ts-adt/MakeADT';

const matchError = makeMatch('type')

type Account = Readonly<{
  balance: number
  frozen: boolean
}>

type Item = Readonly<{
  id: string
}>

type Cart = Readonly<{
  items: Item[]
  total: number
}>

type AccountFrozen = Readonly<{
  type: 'AccountFrozen'
  message: string
}>

type NotEnoughBalance = Readonly<{
  type: 'NotEnoughBalance'
  message: string
}>

const checkout =
  (cart: Cart) =>
  (account: Account) =>
    pipe(
      account,
      pay(cart.total),
      E.match(
        matchError({
          AccountFrozen: (e) => 'account frozen',
          NotEnoughBalance: (e) => 'not enough balance',
        }),
        (a) => 'Handle success...',
      )
    )

const pay =
  (amount: number) =>
  (account: Account): E.Either<
    NotEnoughBalance | AccountFrozen,
    Account
  > =>
    account.frozen
      ? E.left({
          type: 'AccountFrozen',
          message: 'Cannot pay with a frozen account!',
        })
      : account.balance < amount
        ? E.left({
            type: 'NotEnoughBalance',
            message: `Cannot pay ${amount} with a balance of ${account.balance}!`,
          })
        : E.right({
            ...account,
            balance: account.balance - amount,
          })


const account1: Account = {
  balance: 70,
  frozen: false
}

pipe(
  account1,
  pay(50)
) // E.right({
  //   balance: 20,
  //   frozen: false
  // })


const account2: Account = {
  balance: 30,
  frozen: false
}

pipe(
  account2,
  pay(50)
) // E.left({
  //   type: 'NotEnoughBalance',
  //   message: 'Cannot pay 50 with a balance of 30!',
  // })


const account3: Account = {
  balance: 100,
  frozen: true,
}

pipe(
  account3,
  pay(50)
) // E.left({
  //   type: 'AccountFrozen',
  //   message: 'Cannot pay with a frozen account!',
  // })
