import {
  IsEnum,
  IsOptional,
  IsString,
  IsDateString,
  IsBoolean,
  IsMongoId, IsEmail, IsDate,
  IsArray
} from 'class-validator';
import { OrderSrtatus } from '../schemas/order.schema';
import { Types } from 'mongoose';
import { IProductInterface } from '../interfaces/product.interface';

export class OrderDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsMongoId()
  @IsString()
  customerId: Types.ObjectId;

  @IsString()
  title: string;

  @IsEmail()
  ordererEmail: string;

  @IsBoolean()
  deliveryOption: boolean;

  @IsEnum(OrderSrtatus)
  status: OrderSrtatus = OrderSrtatus.IN_PROGRESS;

  @IsArray()
  products: IProductInterface[];

  @IsOptional()
  @IsString()
  createdAt: string;

}