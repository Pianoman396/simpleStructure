import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersSchema, CustomersSchemaName } from './schemas/customers.schema';
import { CustomerService } from './services/customer.service';
import { OrdersSchema, OrdersSchemaName } from './schemas/order.schema';
import { OrdersService } from './services/orders.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CustomersSchemaName, schema: CustomersSchema},
      {name: OrdersSchemaName, schema: OrdersSchema}
    ])
  ],
  controllers: [],
  providers: [CustomerService, OrdersService],
  exports: [ CustomerService, OrdersService]
})
export class ActivitiesModule {}
