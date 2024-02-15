import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeController } from './stripe.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
