class bankAccount{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }
    deposit(amount){
        if(amount <= 0){
            throw new Error('Deposits must be positive');
        }

        this.#balance += amount;
    }
    withdraw(amount){
        if(amount <= 0){
            throw new Error('Withdraw must be positive');
        }
        if (amount > this.#balance){
            throw new Error('Insufficient funds');
        }

        this.#balance -= amount;
    }
    get balance(){
        return this.#balance;
    }
}