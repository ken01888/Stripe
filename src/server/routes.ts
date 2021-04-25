import * as express from 'express';
import Stripe from 'stripe'


const stripe = new Stripe(your api key)
const router = express.Router();

router.post('/api/donate', async (req, res, next) => {
    const paymentMethood = req.body.paymentMethod
    const amount = req.body.amount
    try {
        const fulfilled = await stripe.paymentIntents.create({
            confirm: true,
            currency: 'usd',
            amount:Number(amount)*100,
            payment_method:paymentMethood.id
        });
        res.json(fulfilled)
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json({msg:'server error'})
        
    }
});

export default router;
