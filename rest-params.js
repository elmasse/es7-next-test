'use strict'

import { traits } from 'traits-decorator'

// A Simple trait to log in the console
class TLog {
    log(...args) {
        console.log(...args);
    }
}

@traits(TLog)
class MyClass {

    constructor(...options) {
        this.log(`constructing with ${options}` )
    }

    arrayOp(state = []) {
        this.log([1,2,3, ...state])
    }

    objectOp(state = {}) {
        this.log({...state, value: true})
    }

}

let instance = new MyClass(1,2,3,4) //constructing with 1,2,3,4
instance.arrayOp() // [1,2,3]
instance.arrayOp([4,5,6]) // [1,2,3,4,5,6]

instance.objectOp() // {value: true}
instance.objectOp({foo: 'foo'}) // {foo: 'foo', value: true}
