import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/HttpException.filter';
import { LoggerModule } from './logger/logger.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
  imports: [LoggerModule],
  providers: [HttpExceptionFilter, LoggingInterceptor],
  exports: [LoggerModule, HttpExceptionFilter, LoggingInterceptor],
})
export class SharedModule {}
