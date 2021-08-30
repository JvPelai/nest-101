import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CreateCatDto } from 'src/cats/dtos/create-cat.dto';
import { ForbiddenException } from 'src/errors/forbidden.exception';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
  }
}
