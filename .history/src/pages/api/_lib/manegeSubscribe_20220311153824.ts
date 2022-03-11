import { query as q } from "faunadb";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
) {
  //buscar o usuario no banco do fauna com id Custumer ID
  //Buscar a ref do usuario
  const useRef = await fauna.query(
    q.select(
      "ref",
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id')
        )
      )
    )
  )

  //salvar os dados da subscription no faunaDB
}