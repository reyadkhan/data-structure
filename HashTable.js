class HashTable {
    #bucketSize = 19
    #table = [];
    #size = 0;

    set(key, value) {
        const hash = this.#hash(key);

        if(this.#table[hash]) {
            for(const index in this.#table[hash]) {
                if(this.#table[hash][index][0] === key) {
                    this.#table[hash][index] = [key, value];
                    return;
                }
            }
            this.#table[hash].push([key, value])
        } else {
            this.#table[hash] = [];
            this.#table[hash].push([key, value]);
        }
        this.#size ++;
    }

    get(key) {
        const hash = this.#hash(key);

        if(this.#table[hash]) {
            for(const index in this.#table[hash]) {
                if(this.#table[hash][index][0] === key) {
                    return this.#table[hash][index][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const hash = this.#hash(key);

        if(this.#table[hash]) {
            for(const index in this.#table[hash]) {
                if(this.#table[hash][index][0] === key) {
                    this.#table[hash].splice(index, 1)
                    this.#size --;
                    return true;
                }
            }
        }
        return false;
    }

    size() {
        return this.#size;
    }

    #hash(key) {
        let hash = 0;

        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.#bucketSize;
    }

    [Symbol.iterator]() {
        const data = this.#table.filter(value => value !== undefined).flat();
        return data.values()
    }
}

//test
// const hash = new HashTable();
// hash.set('hello', 'hi')
// hash.set('hey', 'hi')
// hash.set('foo', 'for')

// console.log(hash.size()) // should return 3
// console.log(hash.get('foo')) // should return `for`
// console.log(hash.remove('foo')); // should return true
// console.log(hash.get('foo')) // should return `undefined`
// console.log(hash.size()) // should return 2

// Iterator test
// for(const value of hash) {
//     console.log(value);
// }
// [ 'hello', 'hi' ]
// [ 'hey', 'hi' ]
