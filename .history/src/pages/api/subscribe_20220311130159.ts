import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from '../../services/stripe'
import { getSession } from 'next-auth/react'; //serve para pegar os coockies


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
      //criar o usuario em si
      const session = await getSession({ req });

      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
        // metadata
      })


    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id, // Id do usuario; comprador
      payment_method_types: ['card'], //metodo de pagamento
      billing_address_collection: 'required', //Endereço obrigatorio ou não
      line_items: [
        //itens do carrinho
        {price: 'price_1KaNxwF0aa4KZVxj1gsjE5Ya', quantity: 1} //id do price
      ],
      mode: 'subscription', //pagamento mensal em assinatura
      allow_promotion_codes: true, //se aceita cupom de descontos
      success_url: process.env.STRIPE_SUCCESS_URL, // link de redirecionamento apos o pagamento 
      cancel_url: process.env.STRIPE_CANCEL_URL
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id }) // se bem sucessido
  } else {
    res.setHeader('Allow', 'POST') //metodo que aceita e POST
    res.status(405).end('Method not allowed') //exibe uma mensagem de erro que nao é permitido o metodo 
  }
}