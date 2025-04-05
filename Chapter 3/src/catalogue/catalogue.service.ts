import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatalogueService {
  constructor(private readonly configService: ConfigService) {}

  private readonly products = [
    { id: 1, name: 'Gold Necklace', price: 129.99 },
    { id: 2, name: 'Silver Earrings', price: 49.5 },
    { id: 3, name: 'Diamond Ring', price: 249.0 },
  ];

  getDatabaseUrl() {
    return this.configService.get<string>('databaseUrl');
  }

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
