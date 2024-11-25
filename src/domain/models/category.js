class Category {
    constructor({ id, name, description, state }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.state = state || 'activo';
    }
  }
  
  module.exports = Category;
  