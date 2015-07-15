'use strict'

import { button, Button, buttonWithFactory, ButtonWithFactory } from './button'
import create, { createWithFactoryNamed } from './lib/create'

const options = { height: 100, width: 100 }

// pick the way you like most

let buttonOne = new Button(options) // classic

let buttonTwo = button(options) // factory method

let buttonThree = Button::create(options) // using bindable

let buttonFour = Button.create(options)  // static factory method


let buttonWithFactoryOne =  new ButtonWithFactory(options) // classic

let buttonWithFactoryTwo = buttonWithFactory(options)  // factory method

let buttonWithFactoryThree = ButtonWithFactory.factory(options) // static factory method

{
    let create = createWithFactoryNamed('factory') // configure a bindable with a given factory name
    let buttonWithFactoryFour = ButtonWithFactory::create(options) // bindable
}
