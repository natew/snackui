import { buffer } from 'micro'
import type Stripe from 'stripe'
import { apiRoute } from '~/features/api/apiRoute'
import { unclaimSubscription } from '~/features/api/unclaimProduct'
import {
  upsertProductRecord,
  deleteProductRecord,
  upsertPriceRecord,
  deletePriceRecord,
  manageSubscriptionStatusChange,
  deleteSubscriptionRecord,
  addRenewalSubscription,
} from '~/features/auth/supabaseAdmin'
import { stripe } from '~/features/stripe/stripe'

const endpointSecret = process.env.STRIPE_SIGNING_SIGNATURE_SECRET

export default apiRoute(async (req) => {
  if (!endpointSecret) {
    throw new Error('Stripe endpoint secret signature is not set')
  }

  let event: Stripe.Event
  const sig = req.headers['stripe-signature']

  const toltReferral = req.body?.referral as string | undefined

  const reqBuffer = await buffer(req)
  try {
    event = stripe.webhooks.constructEvent(reqBuffer, sig ?? '', endpointSecret)
  } catch (error) {
    console.error(error.message)
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
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

    case 'customer.subscription.created': {
      const createdSub = event.data.object as Stripe.Subscription
      await manageSubscriptionStatusChange(
        createdSub.id,
        typeof createdSub.customer === 'string'
          ? createdSub.customer
          : createdSub.customer.id,
        true
      )
      break
    }
    case 'customer.subscription.updated': {
      const updatedSub = event.data.object as Stripe.Subscription
      await manageSubscriptionStatusChange(
        updatedSub.id,
        typeof updatedSub.customer === 'string'
          ? updatedSub.customer
          : updatedSub.customer.id
      )
      break
    }
    case 'customer.subscription.deleted': {
      await unclaimSubscription(event.data.object as Stripe.Subscription)
      await deleteSubscriptionRecord(event.data.object as Stripe.Subscription)
      break
    }

    case 'checkout.session.completed': {
      await addRenewalSubscription(event.data.object as Stripe.Checkout.Session, {
        toltReferral,
      })
      break
    }

    default:
      console.error(
        `Unhandled event type ${event.type}`
        // JSON.stringify(event.data, null, 2)
      )
  }

  return Response.json({
    success: true,
  })
})

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
