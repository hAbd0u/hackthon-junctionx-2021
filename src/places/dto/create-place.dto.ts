import { Prop } from '@nestjs/mongoose';

export class CreatePlaceDto {
    
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
