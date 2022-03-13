//no momento que recebemos a requisição a gente vai aler a requisição utilizando esse Readable, e para isso vamos criar um function "buffer" que converte esse Readable string em um objeto em si


import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'; //primeiro vamos importar 



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

        //Usando a STRIPE_WEBHOOK_SECRET
        const secret = req.headers['stripe-singnature']

        res.status(200).json({ok: true})
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}