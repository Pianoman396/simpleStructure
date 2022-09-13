import { Document } from 'mongoose';

export interface ICustomerModel extends Document {
  _id?: any,
  name: string,
  email: string,
  newCustomer: boolean,
  status: string
}