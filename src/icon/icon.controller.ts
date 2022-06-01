import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { RawCreateIconDTO } from './dto/create-icon.dto';
import { PaginationQueryDTO } from './dto/pagination-query.dto';
import { IconService } from './icon.service';

@Controller('icon')
export class IconController {
  constructor(private iconService: IconService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() rawCreateIconDTO: RawCreateIconDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const filename = `${Date.now()}_${file.originalname}`;
    const writeFile = createWriteStream(
      join(process.cwd(), 'upload', filename),
    );
    writeFile.write(file.buffer);
    return this.iconService.create({
      path: filename,
      ...rawCreateIconDTO,
    });
  }

  @Get('query')
  async query(@Query() paginationQueryDTO: PaginationQueryDTO) {
    return this.iconService.query(paginationQueryDTO);
  }
}
