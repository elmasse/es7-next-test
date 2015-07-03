'use strict'

import { traits, requires } from 'traits-decorator'

import create from './lib/create'

const MixFoo = {
    foo() {
        console.log('woohoo')
    },

    @requires('collection')
    printCollection() {
        console.log('collection: ' + this.collection)
    }
}

@traits(MixFoo)
class MyClass {

    constructor(collection: []) {
        this.collection = collection
    }
}

let obj = MyClass::create([1,3,5])

obj.foo()
obj.printCollection()


//reusing traits decorator
function myTraits(...list){
    return function(target) {
        traits(...list)(target)
    }
}

@myTraits(MixFoo)
class Another {

}

let a = new Another();

a.foo();