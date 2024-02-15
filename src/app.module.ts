import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [AuthModule, UserModule, StripeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
