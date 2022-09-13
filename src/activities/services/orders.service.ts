import { Injectable, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrdersSchemaName } from '../schemas/order.schema';
import { IOrderModel } from '../models/order.model';
import { OrderDto } from '../dtos/order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(OrdersSchemaName)  private readonly orderModel: Model<IOrderModel>,
  ){}

  async insertOrder(orderData: OrderDto) {
   await new this.orderModel({
     ...orderData
   }).save();
  }

  async getCustomer() {
    return await this.orderModel.find().populate('orderOwner')
  }

}