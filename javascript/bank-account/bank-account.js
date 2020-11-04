//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.accountStatus = false; //closed account
  }

  open() {
    if (this.accountStatus == true) {
      throw new ValueError();
    } else {
      this.accountStatus = true;
    }
  }

  close() {
    if (this.accountStatus == false) {
      throw new ValueError();
    } else {
      this.accountStatus = false;
      this.accountBalance = 0;
    }
  }

  deposit(amount) {
    let depositAmount = amount;
    if (amount < 0) {
      throw new ValueError();
    } else {
      if (this.accountStatus == false) {
        throw new ValueError();
      }
      this.accountBalance = this.accountBalance + depositAmount;
    }
  }

  withdraw(amount) {
    let depositAmount = amount;
    if (amount > this.accountBalance) {
      throw new ValueError();
    }
    if (amount < 0) {
      throw new ValueError();
    } else {
      if (this.accountStatus == false) {
        throw new ValueError();
      }
      this.accountBalance = this.accountBalance - depositAmount;
    }
  }

  balance() {
    if (this.accountStatus == false) {
      throw new ValueError();
    }
    return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
