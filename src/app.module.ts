import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IconModule } from './icon/icon.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    IconModule,
    FileModule,
    MongooseModule.forRoot('mongodb://localhost:27017/ICON_ZOO'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
