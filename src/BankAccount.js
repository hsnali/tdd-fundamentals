var BankAccount = function (initialDeposit) {
  var balance = initialDeposit || 0;
  this.deposit = function (ammount) {
    //TODO: this should have upper limit?
    balance += ammount;
  };

  this.withdraw = function (ammount) {
    //TODO this should check balance first
    balance -= ammount;

    if(balance < 0) {
      balance -= 5;
    }
  };

  this.getBalance = function () {
    return balance;
  };

};

module.exports = BankAccount;
