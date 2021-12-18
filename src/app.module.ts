import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/monoment'), PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
