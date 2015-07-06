'use strict'

export default function create(...args) {
    let Class = this,
        hasFactory = 'create' in Class

    return hasFactory ? Class['create'](args) : new Class(args)
}

