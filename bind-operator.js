'use strict'

function logMe() { console.log(this) }

let obj = { state: 1 }

obj::logMe()