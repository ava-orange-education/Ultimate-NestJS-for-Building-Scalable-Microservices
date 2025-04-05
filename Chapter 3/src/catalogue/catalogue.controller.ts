import { Controller, Get } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';

@Controller('catalogue')
export class CatalogueController {
    constructor(private readonly catalogueService: CatalogueService) {}

    /**
     * Get all products
     * @returns {Array}
     */
    @Get()
    findAll() {
        return this.catalogueService.findAll();
    }
}