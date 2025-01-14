class Bank {
    accountDetails = {
        1000: { accno: 1000, username: 'ann', password: 'ann123', balance: 2000 },
        1001: { accno: 1001, username: 'user1', password: 'user123', balance: 3000 },
        1002: { accno: 1002, username: 'user2', password: 'user13', balance: 5000 },
        1003: { accno: 1003, username: 'user3', password: 'user132', balance: 6000 },

    }
    //  methods
    // ------------------------------------------------
    // 1) validate the given accno(check whethet accno is present or not)
    // ---------------------------------------
    validateAccount(accountnumber) {
        return accountnumber in this.accountDetails ? true : false
    }
    // 2)authenticate account:3 arguments passes
    authenticateAccount(accno, uname, pwd) {
        if (this.validateAccount(accno)) {
            if (this.accountDetails[accno].username === uname && this.accountDetails[accno].password === pwd) {
                console.log("Aunthentication Successfull");

            }
            else {
                console.log("Authentication Failed");

            }

        }
        else {
            console.log("Account not exist");

        }
    }

    // 3)balance enquiry
    balanceEnquiry(accno, pwd) {
        if (this.validateAccount(accno)) {
            if (this.accountDetails[accno].password === pwd) {
                const balance = this.accountDetails[accno].balance

                console.log(`balance amount of ${accno} is ${balance}`);

            }

            else {
                console.log(`password incorrect in ${accno}`);

            }
        }
        else {
            console.log("Account not exist");

        }
    }

    // 4)fund transfer  
    fundTransfer(fromaccno, toaccno, amount) {
        if (this.validateAccount(fromaccno) && this.validateAccount(toaccno)) {
            if (this.accountDetails[fromaccno].balance >= amount) {
                this.accountDetails[fromaccno].balance = this.accountDetails[fromaccno].balance - amount;
                this.accountDetails[toaccno].balance = this.accountDetails[toaccno].balance + amount;
                console.log("fund transfeered successfully");
                console.log(`balance amount in ${fromaccno} is ${this.accountDetails[fromaccno].balance}`);
                console.log(`balance amount in ${toaccno} is ${this.accountDetails[toaccno].balance}`);
            }
            else {
                console.log("insufficient balance");

            }
        }
        else {
            console.log("Either one or both account not exist");

        }
    }

}
const obj = new Bank()
const result = obj.validateAccount(1002)
console.log("Validate Account Details:");
console.log("-------------------------------------");


if (result) {
    console.log("Account exist in db");

}
else {
    console.log("Account doesn't exist");

}


console.log("Authenticate Account Details:");
console.log("-------------------------------------");
obj.authenticateAccount(1001, "user1", "user123")
obj.authenticateAccount(1002, "user2", "user13")
obj.authenticateAccount(1003, "user4", "user123")


console.log("Balance Enquiry Details:");
console.log("-------------------------------------");
obj.balanceEnquiry(1001, "user123")
obj.balanceEnquiry(1005, "user123")
obj.balanceEnquiry(1002, "user321")


console.log("Fund Transfer Details");
console.log("-------------------------------");
obj.fundTransfer(1001, 1002, 2000)

