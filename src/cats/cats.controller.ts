import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  HttpCode,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cats } from '../database/entities/cats.entity';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  index(): Promise<Cats[]> {
    return this.catsService.findAll();
  }

  @Post('create')
  async create(@Body() catData: Cats): Promise<any> {
    console.log('create', catData);
    return this.catsService.create(catData);
  }

  @Get(':id')
  findOne(@Param() params): Promise<any> {
    console.log('inside get id');
    console.log(params.id);
    return this.catsService.findOne(params.id);
  }

  @Delete(':id')
  deleteOne(@Param() params): Promise<any> {
    console.log('inside delete id');
    console.log(params.id);
    return this.catsService.deleteOne(params.id);
  }
  @Put(':id')
  update(@Param('id') id, @Body() body): Promise<any> {
    console.log(body.firstName);
    return this.catsService.updateOne(id, body.firstName);
  }
}
