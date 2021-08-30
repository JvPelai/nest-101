import {
  Body,
  Controller,
  Get,
  Post,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CreateCatDto } from 'src/cats/dtos/create-cat.dto';
import { ForbiddenException } from 'src/errors/forbidden.exception';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @SetMetadata('roles', ['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
  }
}
