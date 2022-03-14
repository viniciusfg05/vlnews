import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
) {
  //buscar o usuario no banco do fauna com id Custumer ID
  //Buscar a ref do usuario
  const useRef = await fauna.query(
    q.Select(
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