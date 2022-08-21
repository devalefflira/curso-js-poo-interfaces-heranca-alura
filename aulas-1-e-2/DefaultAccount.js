export class DefaultAccount {
  constructor(openingBalance, client, agency) {
    this._balance = openingBalance;
    this._client = client;
    this._agency = agency;
  }

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  toWithdraw(withdrawalAmount) {
    let rate = 1;
    return this._toWithdraw(withdrawalAmount, rate);
  }

  _toWithdraw(withdrawalAmount, rate) {
    const amountWithdrawn = rate * withdrawalAmount;
    if (this._balance >= amountWithdrawn) {
      this._balance -= amountWithdrawn;
      return amountWithdrawn;
    }

    return 0;
  }

  toDeposit(depositAmount) {
    this._balance += depositAmount;
  }

  toTransfer(transferValue, recipientAccount) {
    const amountWithdrawn = this.toWithdraw(transferValue);
    recipientAccount.toDeposit(amountWithdrawn);
  }
}
