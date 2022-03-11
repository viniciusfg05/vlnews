import { NextApiRequest, NextApiResponse } from "next";
import {query as q} from 'faunadb'
import { stripe } from '../../services/stripe'
import { getSession } from 'next-auth/react'; //serve para pegar os coockies
import { fauna } from "../../services/fauna";

type findUserLogadoUser = {
  ref: {
    id: string;
  },
  data: {
    stripe_customer_id: string;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //Verificar se o metodo da req é POST
  if (req.method === "POST") {
      
    const session = await getSession({ req });


      
      //Evitar que cliente duplicado {
      const findUserLogado = await fauna.query<findUserLogadoUser>(
        q.Get(
          q.Match(
            q.Index('user-by-email'),
            q.Casefold(session.user.email)
          )
        )
      )
      //variavel que pega os Id do customer
      let customerId = findUserLogado.data.stripe_customer_id
      
      if(!customerId) { //se ainda nao tem um custemer Id
        const stripeCustomer = await stripe.customers.create({
          email: session.user.email,
          // metadata
        })

        await fauna.query(
          q.Update(
            q.Ref(q.Collection('users'), findUserLogado.ref.id),
            {
               //Dados que eu quero atualizar
               data: {
                 stripe_customer_id: stripeCustomer.id
               }
            }
          )
        )
      }

    //Criando um checkout
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId, // Id do usuario; comprador //muito importante quem está comprando
      payment_method_types: ['card'], //metodo de pagamento
      billing_address_collection: 'required', //Endereço obrigatorio ou não
      line_items: [
        //itens do carrinho
        {price: 'price_1KaNxwF0aa4KZVxj1gsjE5Ya', quantity: 1} //id do price
      ],
      mode: 'subscription', //pagamento mensal em assinatura
      allow_promotion_codes: true, //se aceita cupom de descontos
      success_url: process.env.STRIPE_SUCCESS_URL, // link de redirecionamento apos o pagamento 
      cancel_url: process.env.STRIPE_CANCEL_URL //em variaveis ambiente
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id }) // se bem sucessido


  } else {
    res.setHeader('Allow', 'POST') //metodo que aceita e POST
    res.status(405).end('Method not allowed') //exibe uma mensagem de erro que nao é permitido o metodo 
  }
}