import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  constructor(private configService: ConfigService) {}

  handleWebhook(payload: any) {
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    // const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

    // const sig = req.headers['stripe-signature']!;

    // let event: Stripe.Event;

    // try {
    //   const body = await buffer(req);
    //   event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    // } catch (err) {
    //   // On error, log and return the error message
    //   console.log(`❌ Error message: ${(err as any).message}`);
    //   res.status(400).send(`Webhook Error: ${(err as any).message}`);
    //   return;
    // }

    // // Successfully constructed event
    // console.log('✅ Success:', event.id);

    // // Cast event data to Stripe object
    // if (event.type === 'payment_intent.succeeded') {
    //   const stripeObject: Stripe.PaymentIntent = event.data
    //     .object as Stripe.PaymentIntent;
    //   console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
    //   await prisma.payment.update({
    //     where: {
    //       clientSecret: stripeObject.client_secret!,
    //     },
    //     data: {
    //       status: 'completed',
    //     },
    //   });
    // } else if (event.type === 'payment_intent.payment_failed') {
    //   const stripeObject = event.data.object as Stripe.PaymentIntent;
    //   console.log(`💰 PaymentIntent status: ${stripeObject.status}`);

    //   await prisma.payment.update({
    //     where: {
    //       clientSecret: stripeObject.client_secret!,
    //     },
    //     data: {
    //       status: 'failed',
    //     },
    //   });
    // } else {
    //   console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    // }

    // // Return a response to acknowledge receipt of the event
    // res.json({ received: true });
  }
}
