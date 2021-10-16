const createAccount = (balance) => {
  let withdraws = 0;
  let copyBalance = balance;

  return (amount) => {
    withdraws++;
    if (copyBalance >= amount) {
      copyBalance -= amount;
      console.log(copyBalance, withdraws);
      return copyBalance;
    } else {
      return "Insufficient money";
    }
  };
};

const account = createAccount(100);

account(20);
account(30);
