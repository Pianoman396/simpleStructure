import { Date, Schema } from 'mongoose';

export enum CustomerSrtatus  {
  GOOD ='GOOD CUSTOMER',
  REPORTED = 'BLOCKED CUSTOMER'
};

const CustomersSchemaDefinition = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  newCustomer: { type: Boolean, required: false, default: true },
  status: { type: String, required: true, default: CustomerSrtatus.GOOD },
  createdAt: {type: Date, required: false, default: Date.now()}
};

export const CustomersSchema = new Schema(CustomersSchemaDefinition);
export const CustomersSchemaName = 'Customers';