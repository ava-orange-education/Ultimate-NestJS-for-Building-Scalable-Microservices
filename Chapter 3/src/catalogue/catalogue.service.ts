import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogueService {
    private readonly products = [
        { id: 1, name: 'Gold Necklace', price: 129.99 },
        { id: 2, name: 'Silver Earrings', price: 49.5 },
        { id: 3, name: 'Diamond Ring', price: 249.0 }
      ];
    
      /**
       * Get all products
       * @returns {Array}
       */
      findAll() {
        return this.products;
      }

      getCatalogue() {
        return this.findAll();
      }
    
}
