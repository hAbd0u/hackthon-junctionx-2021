import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
  @Prop()
  title: string;

  @Prop()
  lan: string;

  @Prop()
  lat: string;

  @Prop()
  description: string;

  @Prop()
  gallery: [];
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
