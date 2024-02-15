import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from 'src/user/user.repository';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  constructor(
    private configService: ConfigService,
    private userRepository: UserRepository,
  ) {}

  handleWebhook(payload: any, sig: string) {
    console.log(payload);
    console.log(this.configService.get('STRIPE_SECRET_KEY'));

    const stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'));

    const webhookSecret: string = this.configService.get(
      'STRIPE_WEBHOOK_SECRET',
    );

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
    } catch (err) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${(err as any).message}`);
      throw new HttpException((err as any).message, 400);
      return;
    }

    console.log(event);
    // Successfully constructed event
    console.log('✅ Success:', event.id);

    //   Cast event data to Stripe object
    if (event.type === 'payment_intent.succeeded') {
      const stripeObject: Stripe.PaymentIntent = event.data
        .object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
      // await prisma.payment.update({
      //   where: {
      //     clientSecret: stripeObject.client_secret!,
      //   },
      //   data: {
      //     status: 'completed',
      //   },
      // });
    } else if (event.type === 'payment_intent.payment_failed') {
      const stripeObject = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${stripeObject.status}`);

      // await prisma.payment.update({
      //   where: {
      //     clientSecret: stripeObject.client_secret!,
      //   },
      //   data: {
      //     status: 'failed',
      //   },
      // });
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // // Return a response to acknowledge receipt of the event
    // res.json({ received: true });
  }
}
