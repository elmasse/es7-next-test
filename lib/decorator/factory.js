'use strict'

export default function factory(factoryName = "create"){

    return function(target) {
        target[factoryName] = function(...options) {
            return new target(...options);
        }
    }
}
