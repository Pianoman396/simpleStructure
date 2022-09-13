import { Date, Schema } from 'mongoose';
import { CustomersSchemaName } from './customers.schema';

export enum OrderSrtatus  {
  DRAFT ='DRAFT',
  RESOLVED = 'RESOLVED',
  IN_PROGRESS = 'IN PROGRESS'
};

const OrderSchemaDefinition = {
  customerId: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  ordererEmail: { type: String, required: true },
  products: [
    {
      _id: { type: String, required: false },
      name: { type: String, required: false },
      options: { type: String, required: false }
    }
  ],
  status: { type: String, required: true, default: OrderSrtatus.IN_PROGRESS },
  createdAt: {type: Date, required: false, default: Date.now()},
  deliveryOption: { type: Boolean, required: false, default: false }
};

const schema = new Schema(OrderSchemaDefinition, {
  collection: 'orders',
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

schema.virtual('orderOwner', {
  ref: CustomersSchemaName, // The model to use
  localField: 'customerId',
  foreignField: '_id',
  justOne: true,
});

export const OrdersSchema: Schema = schema;
export const OrdersSchemaName = 'Orders';