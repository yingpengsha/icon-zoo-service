import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Icon, IconSchema } from 'schemas/icon.schema';
import { IconController } from './icon.controller';
import { IconService } from './icon.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Icon.name, schema: IconSchema }]),
  ],
  controllers: [IconController],
  providers: [IconService],
})
export class IconModule {}
