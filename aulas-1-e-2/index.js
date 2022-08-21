import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';
import { SavingsAccount } from './SavingsAccount.js';

const client_001 = new Client('John', '11122233309');

const currentAccount_001 = new CurrentAccount(client_001, 1001);
currentAccount_001.toDeposit(500);
currentAccount_001.toWithdraw(100);

const savingsAccount_001 = new SavingsAccount(50, client_001, 1001);
savingsAccount_001.toWithdraw(10);

console.log(savingsAccount_001);
console.log(currentAccount_001);
