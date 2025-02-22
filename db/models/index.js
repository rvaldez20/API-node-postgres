const { User, UserSchema } = require('./user.model')
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');


function setupModels(sequelize) {
   // inits de los models
   User.init(UserSchema, User.config(sequelize));
   Customer.init(CustomerSchema, Customer.config(sequelize));
   Category.init(CategorySchema, Category.config(sequelize));
   Product.init(ProductSchema, Product.config(sequelize));

   // asociations
   User.associate(sequelize.models); // Para tener la asocin del customer en el user
   Customer.associate(sequelize.models);  // forenkey debera estar en la tabla customer
   Category.associate(sequelize.models); //  Relacion de 1 categoria tiene muchos products
   Product.associate(sequelize.models);  // el producto muestre la categoria a la que pertenece
}

module.exports = setupModels;
