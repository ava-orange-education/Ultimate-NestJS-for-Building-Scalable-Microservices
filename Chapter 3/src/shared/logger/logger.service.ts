import { Inject, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import winston, { format } from 'winston';
import WinstonCloudwatch from 'winston-cloudwatch';

@Injectable({ scope: Scope.REQUEST })
export class LoggerService {
  private readonly logger: winston.Logger;
  private readonly requestId: string;

  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly configService: ConfigService,
  ) {
    this.requestId = request.headers['x-request-id'] || 'unknown';

    this.logger = winston.createLogger({
      level: this.configService.get('LOG_LEVEL') || 'info',
      format: format.combine(format.timestamp(), format.json()),
      transports: [new winston.transports.Console()],
    });

    if (this.configService.get('NODE_ENV') === 'production') {
      this.logger.add(
        new WinstonCloudwatch({
          logGroupName: 'gemcart-logs',
          logStreamName: this.configService.get('service.name'),
          awsRegion: this.configService.get('aws.region'),
          jsonMessage: true,
        }),
      );
    }
  }

  log(message: string) {
    this.logger.log({
      level: 'info',
      requestId: this.requestId,
      message,
    });
  }

  error(message: string) {
    this.logger.error({
      requestId: this.requestId,
      message,
    });
  }

  warn(message: string) {
    this.logger.warn({
      requestId: this.requestId,
      message,
    });
  }

  debug(message: string) {
    this.logger.debug({
      requestId: this.requestId,
      message,
    });
  }

  verbose(message: string) {
    this.logger.verbose({
      requestId: this.requestId,
      message,
    });
  }
}
