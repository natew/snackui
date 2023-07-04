import { stripe } from '@lib/stripe'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const code = req.query.code

  if (typeof code !== 'string') {
    res.status(400).json({
      message: 'no code provided',
    })
    return
  }

  const promoList = await stripe.promotionCodes.list({
    active: true,
    code,
    expand: ['data.coupon'],
  })

  const promo = promoList.data[0]

  if (!promo) {
    res.status(404).json({
      message: "promo code doesn't exist"
    })
  }
  res.json(promo.coupon)
}

export default handler
