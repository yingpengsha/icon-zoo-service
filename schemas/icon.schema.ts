import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type IconDocument = Icon & Document;

export class Icon {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop(String)
  path: string;

  @Prop([String])
  keyword: string[];
}

export const IconSchema = SchemaFactory.createForClass(Icon);
