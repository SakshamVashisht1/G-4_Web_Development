const {greet} = require('./script');

function sayHello(name) {

    return greet(name);

}

module.exports = {sayHello};