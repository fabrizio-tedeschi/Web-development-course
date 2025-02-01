function Account(id, IBAN, owner, currency){
    
    if(!new.target){
        console.log("Security error: allowed only \'new\' operator");
        return null;
    }
    
    this.id = id;
    this.IBAN = IBAN;
    this.owner = owner;
    this.balance = 0;
    this.currency = currency;
    this.operations = [];

    this.withdrawal = function(amount){
        if(amount <= 0 || amount >= 1000){
            console.log("Error: amount = " + amount + ": Invalid amount value!")
            return;
        }

        if(amount > this.balance){
            console.log("Error: Exceeding account balance!")
            return;
        }

        this.balance -= amount;

        date = new Date();

        this.operations.push({
            "type": "withdrawal",
            "amount": amount,
            "date": String(date.getDate()) + String(date.getMonth()) + String(date.getYear())
        })
    }

    this.deposit = function(amount){
        if(amount <= 0 || amount >= 1000){
            console.log("Error: amount = " + amount + ": Invalid amount value!")
            return;
        }

        this.balance += amount;

        date = new Date();

        this.operations.push({
            "type": "deposit",
            "amount": amount,
            "date": String(date.getDate()) + String(date.getMonth()) + String(date.getYear())
        })
    }
}

let a1 = Account(1, "IT001", {"name": "John", "surname": "Doe"}, "dollars");
let a2 = new Account(2, "IT002", {"name": "John", "surname": "Doe"},"euros");

console.log()
console.log("a1 =", a1)
console.log("a2 =", a2)
console.log()

a2.withdrawal(1500)
a2.deposit(1500)

a2.withdrawal(100)
a2.deposit(500)
a2.withdrawal(200)

a2.withdrawal(-200)
a2.deposit(-200)

console.log()
console.log("a2.balance =", a2.balance)
console.log("a2.operations =", a2.operations)