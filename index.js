'use strict'

import { traits, requires } from 'cocktail.next'

import create, { wanted } from './create'

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

obj::wanted()