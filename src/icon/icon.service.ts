import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Icon, IconDocument } from 'schemas/icon.schema';
import { CreateIconDTO } from './dto/create-icon.dto';
import { PaginationQueryDTO } from './dto/pagination-query.dto';

@Injectable()
export class IconService {
  constructor(@InjectModel(Icon.name) private iconModel: Model<IconDocument>) {}

  async create(createIconDTO: CreateIconDTO): Promise<Icon> {
    return this.iconModel.create(createIconDTO);
  }

  async query(paginationQueryDTO: PaginationQueryDTO) {
    const { pageNo, pageSize, name } = paginationQueryDTO;
    const skip = (pageNo - 1) * pageSize;

    const condition = { name: new RegExp(name, 'i') };
    const total = await this.iconModel.count(condition);
    const data = await this.iconModel
      .find(condition)
      .skip(skip)
      .limit(pageSize)
      .sort('createTime')
      .exec();

    return {
      data,
      total,
    };
  }
}
