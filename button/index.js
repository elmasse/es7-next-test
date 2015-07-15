'use strict'

import create, {createWithFactoryNamed} from '../lib/create'
import withFactory from '../lib/decorator/factory' 



//factory for Button
export function button(...options) {
    return Button::create(...options)
}

export class Button {

    constructor({ height = 100, width = 200 } = {}) {
        this.height = height
        this.width  = width

        console.log(`button created with height: ${height} and width: ${width}`)
        console.log('size:', this.size())
    }

    // factory
    static create(...options) {
        console.log('called factory')
        return new Button(...options)
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




export function buttonWithFactory(...options) {
    let create = createWithFactoryNamed('factory')
    return ButtonWithFactory::create(...options)
}

@withFactory('factory')
export class ButtonWithFactory extends Button {

}

