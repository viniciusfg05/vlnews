import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from '../../../services/stripe'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], //metodo de pagamento
      billing_address_collection: 'required', //Endereço obrigatorio ou não
      
      line_items: [
        //intens do carrinho
        {

        }
      ]
    })


  } else {
    res.setHeader('Allow', 'POST') //metodo que aceita e POST
    res.status(405).end('Method not allowed') //exibe uma mensagem de erro que nao é permitido o metodo 
  }
}