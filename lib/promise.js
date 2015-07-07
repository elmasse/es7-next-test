'use strict'

export default function promise (...args) {
    let fn = this

    return new Promise(function(resolve, reject){
        fn(...args, function(err, data){
            if (err) reject(err)
            else resolve(data)
        })
    });


}