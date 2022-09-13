import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ActivitiesModule } from './activities/activities.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './activities/services/customer.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ActivitiesModule,
    MongooseModule.forRoot(process.env.DB_URL, {
      useNewUrlParser: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
