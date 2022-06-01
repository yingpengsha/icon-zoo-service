import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateIconDTO } from './dto/create-icon.dto';
import { PaginationQueryDTO } from './dto/pagination-query.dto';
import { IconService } from './icon.service';

@Controller('icon')
export class IconController {
  constructor(private iconService: IconService) {}

  @Post('create')
  async create(@Body() createIconDTO: CreateIconDTO) {
    return this.iconService.create(createIconDTO);
  }

  @Get('query')
  async query(@Query() paginationQueryDTO: PaginationQueryDTO) {
    return this.iconService.query(paginationQueryDTO);
  }
}
