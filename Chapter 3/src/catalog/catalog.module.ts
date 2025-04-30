import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import configuration from '../shared/config/configutation';
import { validationSchema } from '../shared/config/validation';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            validationSchema,
            envFilePath: `./src/catalog/.env.catalog.${process.env.NODE_ENV}`,
        }),
        SharedModule,
    ],
    controllers: [CatalogController],
    providers: [CatalogService],
})
export class CatalogModule {}
