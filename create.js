'use strict'

export default function create(...args) {
    console.log('creating...')
    let Class = this

    return new Class(args)
}

export function wanted() {
    console.log('wanted')
}