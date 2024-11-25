class Product {
    constructor({ id, name, description, price, category_id, state }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.category_id = category_id;
      this.state = state || 'activo';
    }
  }
  
  module.exports = Product;
  