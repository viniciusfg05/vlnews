import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {

  } else {
    res.setHeader('Allow', 'POST') //metodo que aceita e POST
    res.status(405).end('Method not allowed')
  }
}