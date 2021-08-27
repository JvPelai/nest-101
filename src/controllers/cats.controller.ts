import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from 'src/dtos/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    res.status(HttpStatus.OK).json(createCatDto);
  }
}
