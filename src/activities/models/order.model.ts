import { Document, Types } from 'mongoose';
import { IProductInterface } from '../interfaces/product.interface';
import { OrderSrtatus } from '../schemas/order.schema';

export interface IOrderModel extends Document {
  _id?: any,
  customerId: Types.ObjectId,
  title: string,
  ordererEmail: string,
  products: IProductInterface[],
  status: OrderSrtatus,
  createdAt: Date,
  deliveryOption: boolean
}