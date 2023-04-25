type Account = Readonly<{
  balance: number
  frozen: boolean
}>

class AccountFrozenError extends Error {
  constructor() {
    super('Cannot pay with a frozen account!')
  }
}

class NotEnoughBalanceError extends Error {
  constructor() {
    super('Cannot pay with an insufficient balance!')
  }
}

const pay =
  (account: Account, amount: number): Account => {
    if (account.frozen) {
      throw new AccountFrozenError()
    } else if (account.balance < amount) {
      throw new NotEnoughBalanceError()
    } else {
      return {
        ...account,
        balance: account.balance - amount
      }
    }
  }
