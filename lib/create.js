'use strict'

let factory = 'create'

export default function create(...args) {
    let Class = this,
        hasFactory = factory in Class

    return hasFactory ? Class['create'](...args) : new Class(...args)
}

