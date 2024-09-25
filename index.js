/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(name) {

    let value = 0
    return {
        deposit: function(amount) {
            value += amount
        },
        withdrawl: function(amount) {
            if(amount<value) {
                value -= amount
            } else {
                throw new Error('Not enough Money')
            }
        },
        getBalance: function() {
            console.log('amount: ', `${name} has $${value}`)
        }
    }
    
    // Write logic here    
    
    }
    
    const daveAccount = createBankAccount('dave')
    const wendyAccount = createBankAccount('wendy')
    daveAccount.getBalance()
    daveAccount.deposit(100)
    daveAccount.getBalance()
    daveAccount.withdrawl(40)
    daveAccount.getBalance()


    // Test your code by calling the functions.