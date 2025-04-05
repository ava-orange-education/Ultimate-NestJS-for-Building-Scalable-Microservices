import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueModule } from './catalogue/catalogue.module';
import configuration, { validationSchema } from './shared/config/configutation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    CatalogueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
