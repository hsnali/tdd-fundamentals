var blanket = require('blanket');
var assert = require('chai').assert;
var BankAccount = require('./BankAccount');

describe('Bank Account Module Imported', function () {
  it('should return a function', function () {
    assert.isFunction(BankAccount, 'BankAccount returns a Function');
  });

  it('deposits correct balance', function () {
    var BA = new BankAccount();
    BA.deposit(50);
    assert.equal(BA.getBalance(), 50);
  });

  it('should wirthdraw correct ammount from balance', function () {
    var BA = new BankAccount(50);
    BA.withdraw(30);
    assert.equal(BA.getBalance(), 20);
  });

  it('should penalty fee if withraw more than the balance', function () {
    var BA = new BankAccount(10);
    BA.withdraw(20);
    assert.equal(BA.getBalance(), -15);
  });
});
