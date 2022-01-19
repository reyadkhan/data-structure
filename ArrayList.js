class ArrayList {
    #table = [];
    size = 0;

    constructor(...list) {
        this.addAll(...list)
    }

    add(element) {
        this.#table.push(element);
        this.size ++;
    }

    addAll(...elements) {
        elements.forEach(elem => {
            this.#table.push(elem);
            this.size ++;
        })
    }

    get(index) {
        return this.#table[index];
    }

    remove(index) {
        if(this.#table[index]) {
            this.#table.splice(index, 1)
            this.size --;
        }
    }

    removeAll() {
        this.#table = [];
        this.size = 0;
    }

    [Symbol.iterator]() {
        return this.#table.values();
    }
}

// Test

// const list = new ArrayList('PHP', 'JS', 'JAVA', 'PYTHON');
//
// console.log(list.get(0)) // Expected `PHP`
// console.log(list.get(3)) // Expected `PYTHON`
// list.add('GO')
// console.log(list.get(4)) // Expected `GO`
// list.addAll('C', 'C#')
// console.log(list.get(6)) // Expected `C#`
// console.log(list.size) // Expected 7
// list.remove(6)
// console.log(list.get(6)) // Expected `undefined`
// console.log(list.size) // Expected 6
//
// console.log('------ iterable --------')
//
// for(const value of list) {
//     console.log(value);
// } // Expected `PHP` `JS` `JAVA` `PYTHON` `GO` `C`
//
// console.log('------ end of iterable --------')
//
// list.removeAll()
// console.log(list.size) // Expected 0