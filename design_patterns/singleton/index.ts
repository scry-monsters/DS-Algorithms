class Database {  
    url: number
    private static instance: Database

    constructor(){
        if(Database.instance){
            return Database.instance
        }
        this.url = Math.random();
        Database.instance = this;
    }
}

let check1 = new Database();
let check2 = new Database();

console.log(check1.url)
console.log(check2.url)
