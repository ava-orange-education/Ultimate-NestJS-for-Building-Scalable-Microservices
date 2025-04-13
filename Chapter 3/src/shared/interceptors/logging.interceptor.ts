import { NestInterceptor } from '@nestjs/common';
import { CallHandler } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        console.log(`[${method}] ${url} - ${Date.now() - now}ms`);
      }),
    );
  }
}
