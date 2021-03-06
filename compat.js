'use strict';

import { traits } from 'traits-decorator'

import Eventable from 'cocktail-trait-eventable'
import EventEmitter from 'events'


@traits(Eventable)
class Evented {

    constructor() {
        this._emitter = new EventEmitter()
    }

    //glue code for Eventable trait
    getEmitter() {
        return this._emitter
    }

    emitFoo() {
        this.emit('foo')
    }
}

let evented = new Evented()

evented.on('foo', () => console.log('whooaa'))

evented.emitFoo()
