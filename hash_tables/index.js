// function hashStringToInt(s, tableSize) {
//     let hash = 17;

//     for (let i = 0; i < s.length; i++) {
//       hash += (13 * hash * s.charCodeAt(i)) % tableSize;
//     }

//     return hash;
//   }

// class HashTable{
//     constructor(){
//     this.table = new Array(100);
//     }

//     setItem = (key, value) => {
//         const index = hashStringToInt(key, this.table.length);
//         this.table[index] = value;
//     }

//     getItem = (key) => {
//         const index = hashStringToInt(key, this.table.length);
//         return this.table[index];
//     }
// }

// const myHash = new HashTable();
// myHash.setItem("firstName", "Bob")
// myHash.setItem("lastName", "Jesus")
// console.log(myHash.getItem("Jesus"))

class HashTable {
	constructor(size) {
		this.size = size;
		this.items = new Array(100);
	}

	hashingFunc(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.items.length;
	}

	add(key, value) {
        const index = this.hashingFunc(key);
        this.items[index] = [key, value];
        this.size++;
      }
	get(key){
		const index = this.hashingFunc(key);
        return this.items[index]
	}
    delete(key){
        const index = this.hashingFunc(key);
        if(this.items[index] && this.items[index].length > 0){
            this.items[index] = [];
            this.size--;
            return true;
        }
        return false;
    }
    contains(key){
        const index = this.hashingFunc(key);
        if(this.items[index] && this.items[index].length > 0){
            return true;
        }
        return false;
    }
}

let table = new HashTable();

table.add("firstName", "scry");
console.log(table.contains("firstName"));