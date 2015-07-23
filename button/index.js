'use strict'

import create, {createWithFactoryNamed} from '../lib/create'
import factory from '../lib/decorator/factory' 

// becomes private to Button class
function configure (options) {
    let me = this,
        setterFor = (key) => 'set' + key[0].toUpperCase() +  key.substr(1)

    for ( let k in options ) {
        let setter = setterFor(k)
        if (setter in me) {
            me[setter](options[k])
        }
    }
}


//factory for Button
export function button(...options) {
    return Button::create(...options)
}

export class Button {

    constructor({ height = 100, width = 200 } = {}) {
        // this.height = height
        // this.width  = width
        this::configure(...arguments)

        console.log(`button created with height: ${height} and width: ${width}`)
        console.log('size:', this.size())
    }

    // factory
    static create(...options) {
        console.log('called factory')
        return new Button(...options)
    }

    setHeight(height) {
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    size() {
        let height = this.height,
            width  = this.width

        return {
            height,
            width
        }
    }
}



//factory for ButtonWithFactory
export function buttonWithFactory(...options) {
    let create = createWithFactoryNamed('factory')
    return ButtonWithFactory::create(...options)
}

@factory('factory')
export class ButtonWithFactory extends Button {

}

// ButtonWithFactory has actually 2 factory methods: `create` inherited from Button and `factory`
