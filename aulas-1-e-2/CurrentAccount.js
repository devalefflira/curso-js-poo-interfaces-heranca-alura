import { DefaultAccount } from './DefaultAccount.js';

export class CurrentAccount extends DefaultAccount {
  static numberOfAccounts = 0;
  constructor(client, agency) {
    super(0, client, agency);
    CurrentAccount.numberOfAccounts += 1;
  }

  //sobreescrevendo o comportamento de sacar
  toWithdraw(whithdrawalAmount) {
    let rate = 1.1;
    return this._toWithdraw(whithdrawalAmount, rate);
  }
}
