import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerService } from './activities/services/customer.service';
import { CustomerSrtatus } from './activities/schemas/customers.schema';
import { OrdersService } from './activities/services/orders.service';
import { OrderSrtatus } from './activities/schemas/order.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly  customerService: CustomerService,
    private readonly ordersService: OrdersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('customers')
  async customers() {
   await this.customerService.insertCustomer({
      name: 'Tester',
      email: 'testEmail@email.com',
      newCustomer: false,
      status: CustomerSrtatus.GOOD
    });
  }

  @Get('update/customer')
  async customerUpdate() {
    this.customerService.updateCustomerByCriteria({
      status: CustomerSrtatus.GOOD,
      newCustomer: false
    }, {
      status: CustomerSrtatus.REPORTED,
      newCustomer: true
    });
  }

  @Get('orders')
  async insertNewOrders() {
    let customer = await this.customerService.getFirstCustomer();
    this.ordersService.insertOrder({
      customerId: customer?._id,
      title: 'Some Test Order',
      ordererEmail: customer.email,
      products: [ {  _id: 'testid123465798', name: 'test Product', options: '26inch' } ],
      status: OrderSrtatus.IN_PROGRESS,
      createdAt: String(Date.now()),
      deliveryOption: false
    });
  }

  @Get('customerFromOrder')
  async getCustomerFromOrder() {
    console.log( JSON.stringify(await this.ordersService.getCustomer(), null, 6) );
  }


}
