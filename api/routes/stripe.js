const router = require('express').Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

router.post('/payment', async (req, res) => {
  await stripe.paymentIntents.create(
    {
      amount: req.body.amount,
      currency: 'inr',
    },
    function (stripeErr, stripeRes) {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

router.post('/payment-success', async (req, res) => {
  await stripe.paymentIntents.confirm(
    req.body.clientSecret,
    { payment_method: 'pm_card_visa' },
    function (stripeErr, stripeRes) {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
