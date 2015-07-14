'use strict'

import create from './create'
 

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
