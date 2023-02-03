const faker = require('faker');

class ProductService {

   //! Constructor del service
   constructor() {
      this.products = [];
      this.generate();
   }

   //! Servicio que permite crear una data de 10 productos con datos fake
   generate() {
      const limit = 10;
      for (let index = 0; index < limit; index++) {
         this.products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
         });
      }
   }

   //! Service para crera un nuevo producto
   create(data){
      const newProduct = {
         id: faker.datatype.uuid(),
         ...data
      }

      this.products.push(newProduct);
      return newProduct;
   }

   //! Service para encontrar todos los productos
   find(){
      return this.products;
   }

   //! Service para encontrar un producto por su ID
   findOne(id) {
      return this.products.find(item => item.id === id);
   }

   //! Service para actualizar un producto, desde un dato hasta todos
   update(id, changes){
      const index = this.products.findIndex(item => item.id === id);
      if(index === -1) {
         throw new Error('Product not found');
      }

      // el update permite cambiar desde una sola propiedad hasta todas las propiedades
      const product = this.products[index];
      this.products[index] = {
         ...product,
         ...changes
      };

      return this.products[index];
   }

   //! Service para eliminar un producto (eliminación fisica)
   delete(id){
      const index = this.products.findIndex(item => item.id === id);
      if(index === -1) {
         throw new Error('Product not found');
      }

      this.products.splice(index, 1);
      return { message: 'Deleted', id }
   }
}

module.exports = ProductService;
