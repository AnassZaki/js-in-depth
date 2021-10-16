// Named modules
export const makeWithdraw = (balance) =>
  (function (copyBalance) {
    let balance = copyBalance; // This variable is private
    let doBadThings = function () {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw: function (amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        } else {
          return "Insufficient money";
        }
      },
    };
  })(balance);

const makeWithdrawV2 = (balance) => {
  let copyBalance = balance;
  let doBadThings = function () {
    console.log("I will do bad things with your money");
  };
  doBadThings();
  return {
    withdraw: function (amount) {
      if (copyBalance >= amount) {
        copyBalance -= amount;
        return copyBalance;
      } else {
        return "Insufficient money";
      }
    },
  };
};

export default makeWithdrawV2;
