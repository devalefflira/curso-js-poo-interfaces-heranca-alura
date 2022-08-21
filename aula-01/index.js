import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';

// 1. Create new Client

const client_001 = new Client('Adam', '11122233399');
const client_002 = new Client('Sophia', '21122233399');

// 2. Create new Current Account

const account_001 = new CurrentAccount('1234-0', '100', client_001);
const account_002 = new CurrentAccount('4567-0', '110', client_002);

// 3. Financial Operations

// 3.1 Deposit Operation
account_001.toDeposit(500);

// 3.2 Transfer Operation
account_001.toTransfer(200, account_002);

// 3.3 Withdrawal Operations
account_002.toWithdraw(100);

// 4. Registered Account Accountant

let accountNumber = 0;

// 5. Show in Console
console.log(CurrentAccount.totalAccounts);
