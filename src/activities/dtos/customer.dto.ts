import {
  IsEnum,
  IsOptional,
  IsString,
  IsBoolean, IsEmail,
} from 'class-validator';
import { CustomerSrtatus } from '../schemas/customers.schema';

export class CustomerDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  newCustomer: boolean;

  @IsEnum(CustomerSrtatus)
  status: CustomerSrtatus = CustomerSrtatus.GOOD

}