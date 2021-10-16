import { makeWithdraw } from "./modules/bank.mjs";

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
firstAccount.withdraw(0);
console.log(firstAccount.withdraw(0));

import makeWithdrawV2 from "./modules/bank.mjs";

const secondAccount = makeWithdrawV2(100); // "I will do bad things with your money"
secondAccount.withdraw(10);
