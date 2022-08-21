export class SavingsAccount {
  constructor(openingBalance, client, agencyNumber) {
    this._balance = openingBalance;
    this._client = client;
    this._agencyNumber = agencyNumber;
  }

  toDeposit(depositAmount) {
    if (depositAmount <= 0) {
      return;
    }
    this.balance += depositAmount;
  }
  toWithdraw(withdrawalAmount) {
    if (this.balance >= withdrawalAmount) {
      this.balance -= withdrawalAmount;
      return withdrawalAmount;
    }
  }
  toTransfer(transferValue, destinationAccount) {
    const amountWithdrawn = this.toWithdraw(transferValue);
    destinationAccount.toDeposit(amountWithdrawn);
  }
}
