'use strict'

import fs from 'fs'

import promise from './lib/promise'

fs.readFile
    ::promise('./package.json')
        .then( data => console.log(data.toString()) )

// fs.readFile('./package.json', function(err, data) {
//     console.log(data.toString())
// })