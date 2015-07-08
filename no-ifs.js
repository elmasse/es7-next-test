'use strict'

function is(type) {
    let sut = this

    return sut === type
}


function ifTrue(cb) {
    let expression = !!this

    expression::is(true) && cb()

    return expression
}

function ifFalse(cb) {
    let expression = !!this

    expression::is(false) && cb()

    return expression    
}


let _undef
let _null = null
let _truthy = !0
const key =  'hello'

console.log(_undef::is(undefined)) // true
console.log(_null::is(null)) // true
console.log(_truthy::is(true)) // true

let yep = () =>  {console.log('yep')}
let nope = () =>  {console.log('nope')}

_truthy::ifTrue(yep) // yep

;(!_truthy)::ifFalse(nope) // nope

key::ifTrue(() => {
    console.log(`key is ${key} and it is truthy`)
})
