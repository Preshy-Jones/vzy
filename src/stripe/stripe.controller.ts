import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('webhook')
  handleStripeWebhook(@Body() payload: any) {
    // Handle the webhook payload
    this.stripeService.handleWebhook(payload);
  }
}
