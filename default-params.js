'use strict'

class First {

    constructor (options = { conf: '1'}) {
        console.log(options)
    }
}

class Second {
    constructor ({conf = '1'} = {}) {
        console.log(conf)
    }
}

class Third {
    constructor (options = [] /* options: [] // << flow */) {
        console.log(options)
    }
}

let first  = new First(), // {conf: '1'}
    first1 = new First({}), // {}
    first2 = new First([1,3,5]) // [1,3,5]

let sec = new Second(), // 1
    sec1 = new Second({notConf: 12}), // 1
    sec2 = new Second({conf: 12}), // 12
    sec3 = new Second(12) // 1

