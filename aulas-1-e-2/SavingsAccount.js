import { DefaultAccount } from './DefaultAccount.js';

export class SavingsAccount extends DefaultAccount {
  constructor(openingBalance, client, agency) {
    super(openingBalance, client, agency);
  }
}
