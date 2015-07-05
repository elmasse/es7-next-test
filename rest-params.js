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
}

let instance = new MyClass(1,2,3,4)