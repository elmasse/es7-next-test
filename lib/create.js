'use strict'

let factory = 'create'


export function createWithFactoryNamed(factoryName) {
    return function create(...args) {
    let Class = this,
        hasFactory = factoryName in Class

    return hasFactory ? Class[factoryName](...args) : new Class(...args)

    }
}

export default function create(...args) {
    return this::(createWithFactoryNamed(factory))(...args)
}

