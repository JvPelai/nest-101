import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './controllers/admin.controller';
import { CatsController } from './controllers/cats.controller';
import { DocsController } from './controllers/docs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DocsController, AdminController],
  providers: [AppService],
})
export class AppModule {}
