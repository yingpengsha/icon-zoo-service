import {
  Controller,
  Get,
  Param,
  Post,
  Response,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const filename = `${Date.now()}_${file.originalname}`;
    const writeFile = createWriteStream(
      join(process.cwd(), 'upload', filename),
    );
    writeFile.write(file.buffer);
    return filename;
  }

  @Get(':filename')
  getFile(
    @Param('filename') filename: string,
    @Response({ passthrough: true }) res,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', filename));
    return new StreamableFile(file);
  }
}
