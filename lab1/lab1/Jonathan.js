const Person = require("./person.js");

class Jonathan extends Person {
    constructor(name, colors, bgColors) {
        super(name, colors, bgColors);
    }
}

module.exports = Jonathan;