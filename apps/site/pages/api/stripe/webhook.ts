import { stripe } from '@lib/stripe'
import {
  deletePriceRecord,
  deleteProductRecord,
  deleteSubscriptionRecord,
  manageSubscriptionStatusChange,
  upsertPriceRecord,
  upsertProductRecord,
} from '@lib/supabaseAdmin'
import { buffer } from 'micro'
import { NextApiHandler, PageConfig } from 'next'
import Stripe from 'stripe'

const endpointSecret = process.env.STRIPE_SIGNING_SIGNATURE_SECRET

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const handler: NextApiHandler = async (req, res) => {
  if (!endpointSecret) {
    throw new Error('Stripe endpoint secret signature is not set')
  }

  let event: Stripe.Event
  const sig = req.headers['stripe-signature']

  const reqBuffer = await buffer(req)
  try {
    event = stripe.webhooks.constructEvent(reqBuffer, sig ?? '', endpointSecret)
  } catch (error) {
    console.log(error.message)
    return res.status(400).send(`Webhook error: ${error.message}`)
  }

  switch (event.type) {
    case 'product.created':
    case 'product.updated':
      await upsertProductRecord(event.data.object as Stripe.Product)
      break
    case 'product.deleted':
      await deleteProductRecord((event.data.object as Stripe.Product).id)

      break

    case 'price.created':
    case 'price.updated':
      await upsertPriceRecord(event.data.object as Stripe.Price)
      break
    case 'price.deleted':
      await deletePriceRecord((event.data.object as Stripe.Price).id)
      break

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription
      await manageSubscriptionStatusChange(
        subscription.id,
        typeof subscription.customer === 'string'
          ? subscription.customer
          : subscription.customer.id
      )
      break
    case 'customer.subscription.deleted':
      await deleteSubscriptionRecord(event.data.object as Stripe.Subscription)
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.json({
    success: true,
  })
}

export default handler

// async function handleCreateSubscription(
//   sub: Stripe.Subscription & { plan?: Stripe.Plan; quantity?: number }
// ) {
//   const user = await supabaseAdmin
//     .from('customers')
//     .select('*')
//     .eq('stripe_customer_id', sub.customer)
//     .single()
//   if (user.error) {
//     console.log(`no customer found with customer id of ${sub.customer}`)
//     return
//   }
//   await supabaseAdmin.from('subscriptions').insert({
//     id: sub.id,
//     user_id: user.data.id,
//     cancel_at: sub.cancel_at?.toString(),
//     cancel_at_period_end: sub.cancel_at_period_end,
//     canceled_at: sub.canceled_at?.toString(),
//     created: sub.created.toString(),
//     current_period_end: sub.current_period_end.toString(),
//     current_period_start: sub.current_period_start.toString(),
//     ended_at: sub.ended_at?.toString(),
//     metadata: sub.metadata,
//     price_id: sub.plan?.id,
//     quantity: sub.quantity,
//     status: sub.status,
//     trial_end: sub.trial_end?.toString(),
//     trial_start: sub.trial_start?.toString(),
//   })
// }

// async function handleUpdateSubscription(
//   sub: Stripe.Subscription & { plan?: Stripe.Plan; quantity?: number }
// ) {
//   const user = await supabaseAdmin
//     .from('customers')
//     .select('*')
//     .eq('stripe_customer_id', sub.customer)
//     .single()
//   if (user.error) {
//     console.log(`no customer found with customer id of ${sub.customer}`)
//     return
//   }
//   await supabaseAdmin.from('subscriptions').upsert({
//     id: sub.id,
//     user_id: user.data.id,
//     cancel_at: sub.cancel_at?.toString(),
//     cancel_at_period_end: sub.cancel_at_period_end,
//     canceled_at: sub.canceled_at?.toString(),
//     created: sub.created.toString(),
//     current_period_end: sub.current_period_end.toString(),
//     current_period_start: sub.current_period_start.toString(),
//     ended_at: sub.ended_at?.toString(),
//     metadata: sub.metadata,
//     price_id: sub.plan?.id,
//     quantity: sub.quantity,
//     status: sub.status,
//     trial_end: sub.trial_end?.toString(),
//     trial_start: sub.trial_start?.toString(),
//   })
// }

// async function handleDeleteSubcription(
//   sub: Stripe.Subscription & { plan?: Stripe.Plan; quantity?: number }
// ) {
//   const user = await supabaseAdmin
//     .from('customers')
//     .select('*')
//     .eq('stripe_customer_id', sub.customer)
//     .single()
//   if (user.error) {
//     console.log(`no customer found with customer id of ${sub.customer}`)
//     return
//   }
//   await supabaseAdmin.from('subscriptions').delete().eq('id', sub.id)
// }
