import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schemas/place.schema';


@Injectable()
export class PlacesService {
  constructor(@InjectModel(Place.name) private PlaceModel: Model<PlaceDocument>) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const createdPlace = new this.PlaceModel(createPlaceDto);
    return createdPlace.save();
  }

  async findAll(): Promise<Place[]> {
    return this.PlaceModel.find().exec();
  }

  async findOne(id: string): Promise<Place> {
    let result = this.PlaceModel.findOne({ _id: id });
    /*
    if (!result) {
      return Promise.reject({
        statusCode: 404,
        message: 'Entity not found'
      })
    } 

    return Promise.resolve(result)*/
    return result;
  }

  update(id: string, updatePlaceDto: UpdatePlaceDto) {
    return this.PlaceModel.updateOne({id}, { $set: { ...updatePlaceDto} });
  }

  remove(id: string) {
    return `This action removes a #${id} place`;
  }
}
