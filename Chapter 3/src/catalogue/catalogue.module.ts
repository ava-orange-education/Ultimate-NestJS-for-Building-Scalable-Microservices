import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import configuration from '../shared/config/configutation';
import { validationSchema } from '../shared/config/validation';
import { CatalogueController } from './catalogue.controller';
import { CatalogueService } from './catalogue.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
      envFilePath: `.env.catalogue.${process.env.NODE_ENV}`,
    }),
    SharedModule,
  ],
  controllers: [CatalogueController],
  providers: [CatalogueService],
})
export class CatalogueModule {}
