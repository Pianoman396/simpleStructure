import { Injectable, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomersSchemaName, CustomerSrtatus } from '../schemas/customers.schema';
import { ICustomerModel } from '../models/customer.model';
import { CustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(CustomersSchemaName)  private readonly customerModel: Model<ICustomerModel>,
  ){}

  async insertCustomer(customerData: CustomerDto) {
    let oneCustomer = await this.customerModel.find({ _id: { $ne: null } });
    if(!oneCustomer.length) {
     let result = await new this.customerModel({
       ...customerData,
       createdAt: Date.now()
      }).save();
      console.log('Works', result);
    }
  }

  async updateCustomerByCriteria(criteria, updatableData) {
    await this.customerModel.updateOne(criteria, { $set: updatableData }, { upsert: true });
  }

  async getFirstCustomer() {
    return await this.customerModel.findOne({}).sort({"_id":1}).limit(1);
  }

}