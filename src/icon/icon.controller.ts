import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateIconDTO } from './dto/create-icon.dto';
import { QueryIconDTO } from './dto/query-icon.dto';
import { IconService } from './icon.service';

@Controller('icon')
export class IconController {
  constructor(private iconService: IconService) {}

  @Post('create')
  async create(@Body() createIconDTO: CreateIconDTO) {
    return this.iconService.create(createIconDTO);
  }

  @Get('query')
  async query(@Query() FindIconDTO: QueryIconDTO) {
    const response = [];
    const skip = (FindIconDTO.pageNo - 1) * FindIconDTO.pageSize;
  }
}
