class User {
    constructor({ id, name, lastname, email, phone, type }) {
      this.id = id;
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.phone = phone;
      this.type = type || 'vendedor';
    }
  }
  
  module.exports = User;
  