import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'; //primeiro vamos importar 
import Stripe from "stripe";
import { stripe } from "../../services/stripe";
import { saveSubscription } from "./_lib/manegeSubscribe";


//codigo  para Converter a Rasdable (os dados em stremer: String ) em um objeto 
async function buffer(readable: Readable) {
    const chunks = []; //criar um array 

    //vai percorrendo cada pedaço da requisição e armazenando em chucks
    for await (const chunk of readable) {
        chunks.push(
            typeof chunk === "string" ? Buffer.from(chunk) : chunk
        );
    }

    return Buffer.concat(chunks) //Concatena tudo e converte um Buffer
}



//criar um const por padrao o next tem uma formato de entender a requisição como json, formulario . Mas nesse caso a requisição esta vindo com string, entao temos que desabilitar o entendimento padrao sobre o que ta vindo da requisição 
export const config = {
    api: { 
        bodyParser: false
    }
}

//eventos relevantes 
const relevantEvents = new Set(["checkout.session.completed"]);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    //verifica se o metodo é POST
    if (req.method === 'POST') {
        const buf = await buffer(req) //todos os dados da requisição

        //Usando a STRIPE_WEBHOOK_SECRET - vamos buscar os header da requisição e procura o cabeçalho stripe-singnature esse detalhes consta na documentação
        const secret = req.headers['stripe-signature']

        //vamos verificar agora se os valores que se encontra na variavel ambiente bate com os da requisição  //Depois de construido o evento, temos acessso a varias opções ao da "event."
        let event: Stripe.Event; //eventos que vem do webhooks

        try {
            event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET) //vamos importar o de services/stripe o proprio stripe
            //Se não bater os dados vamos...
        } catch (err) {
            return res.status(400).send(`Webhook error: ${err.message}`)
        }


        //Event type, retorna oq queremos que é  checkout.session.completed  retornado do webhook, mas antes temos que passar informa os eventos relevantes 
        const {type} = event

        if (relevantEvents.has(type)) {
            try{
                switch (type) {
                    case 'checkout.session.completed':

                        const checkoutSession = event.data.object as Stripe.Checkout.Session

                        await saveSubscription(
                            checkoutSession.subscription.toString(),
                            checkoutSession.customer.toString(),
                        )

                        break;
                    default:
                        throw new Error('Unchandled event')
                }
            } catch (err) {
                return res.json({error: 'Webhook handler failed.'})
            }
        }
       

        res.json({receive: true})
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}