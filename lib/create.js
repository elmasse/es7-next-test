'use strict'

export default function create(...args) {
    let Class = this

    return new Class(args)
}

