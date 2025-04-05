import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueModule } from './catalogue/catalogue.module';
import { LoggerModule } from './shared/logger/logger.module';

@Module({
  imports: [CatalogueModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
