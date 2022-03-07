import { NextApiRequest, NextApiResponse } from "next";
import stripe from "stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const checkoutSession = await stripe.checkout.session.create()
  } else {
    res.setHeader('Allow', 'POST') //metodo que aceita e POST
    res.status(405).end('Method not allowed') //exibe uma mensagem de erro que nao é permitido o metodo 
  }
}