var Database = /** @class */ (function () {
    function Database() {
        if (Database.instance) {
            return Database.instance;
        }
        this.url = Math.random();
        Database.instance = this;
    }
    return Database;
}());
var check1 = new Database();
var check2 = new Database();
console.log(check1.url);
console.log(check2.url);
