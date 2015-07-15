'use strict'

export default function withFactory(factoryName = "create"){

    return function(target) {
        target[factoryName] = function(...options) {
            return new target(...options);
        }
    }
}
