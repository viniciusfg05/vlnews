//no momento que recebemos a requisição a gente vai aler a requisição utilizando esse Readable, e para isso vamos criar um function "buffer" que converte esse Readable string em um objeto em si


import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'; //primeiro vamos importar 
import Stripe from "stripe";
import { stripe } from "../../services/stripe";



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


export default async (req: NextApiRequest, res: NextApiResponse) => {
    //verifica se o metodo é POST
    if (req.method === 'POST') {
        const buf = await buffer(req) //todos os dados da requisição

        //Usando a STRIPE_WEBHOOK_SECRET - vamos buscar os header da requisição e procura o cabeçalho stripe-singnature esse detalhes consta na documentação
        const secret = req.headers['stripe-singnature']

        //vamos verificar agora se os valores que se encontra na variavel ambiente bate com os da requisição
        let event: Stripe.Event; //eventos que vem do webhooks

        try {
            event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET) //vamos importar o de services/stripe o proprio stripe
            //Se não bater os dados vamos...
        } catch (err) {
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        res.status(200).json({ok: true})
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}