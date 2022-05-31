import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Icon, IconDocument } from 'schemas/icon.schema';
import { CreateIconDTO } from './dto/create-icon.dto';

@Injectable()
export class IconService {
  constructor(@InjectModel(Icon.name) private iconModel: Model<IconDocument>) {}

  async create(createIconDTO: CreateIconDTO): Promise<Icon> {
    const createdIcon = new this.iconModel(createIconDTO);
    return createdIcon.save();
  }

  async query() {}
}
