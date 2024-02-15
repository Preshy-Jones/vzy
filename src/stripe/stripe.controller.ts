import { Body, Controller, Headers, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('webhook')
  handleStripeWebhook(
    @Body() payload: any,
    @Headers('stripe-signature') sig: string,
  ) {
    // Handle the webhook payload
    this.stripeService.handleWebhook(payload as any, sig);
  }
}
