import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './errors/http-exception.filter';
import { logger } from './middlewares/logger.middleware';

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
