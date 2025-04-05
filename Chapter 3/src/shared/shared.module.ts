import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/HttpException.filter';
import { LoggerModule } from './logger/logger.module';
@Module({
  imports: [LoggerModule],
  providers: [HttpExceptionFilter],
  exports: [LoggerModule, HttpExceptionFilter],
})
export class SharedModule {}
