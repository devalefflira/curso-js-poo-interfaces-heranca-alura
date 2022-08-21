import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';
import { SavingsAccount } from './SavingsAccount.js';
import { DefaultAccount } from './DefaultAccount.js';

// Create new Client

const client_001 = new Client('Adam', '11122233399');
const client_002 = new Client('Sophia', '21122233399');

// Create new Current Account

const account_001 = new DefaultAccount(0, client_001, '1001');
const account_002 = new DefaultAccount(0, client_002, '1002');

// Create new Savings Account

const savingsAccount_001 = new DefaultAccount(50, client_001, 100);

// Financial Operations

// __Deposit Operation
account_001.toDeposit(500);

// __Transfer Operation
account_001.toTransfer(200, account_002);

// __Withdrawal Operations
account_002.toWithdraw(100);

// Registered Account Accountant

let accountNumber = 0;

// Show in Console
console.log(account_001);
console.log(savingsAccount_001);
