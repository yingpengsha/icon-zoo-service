import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type IconDocument = Icon & Document;

export class Icon {
  @Prop({ type: mongoose.Schema.Types.String, required: true, trim: true })
  name: string;

  @Prop({ type: String, trim: true })
  path: string;

  @Prop([String])
  keyword: string[];

  @Prop({ type: Number, required: true, default: Date.now() })
  createTime: number;
}

export const IconSchema = SchemaFactory.createForClass(Icon);
