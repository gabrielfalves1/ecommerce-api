const { v4: uuidv4 } = require('uuid');

class Product {
    constructor(name, description, price) {
        this.id = uuidv4();
        this.name = name || '';
        this.description = description || '';
        this.price = price || 0;
    }
}

module.exports = { Product };
