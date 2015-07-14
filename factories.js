'use strict'

import { button, Button } from './lib/button'
import create from './lib/create'


const options = { height: 100, width: 100 }

// pick the way you like most

let buttonOne = new Button(options)

let buttonTwo = button(options)

let buttonThree = Button::create(options)
