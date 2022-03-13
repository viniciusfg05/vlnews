import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe.js';
import styles from './styles.module.scss';

interface SubscribeButttonProps {
  priceId: string;
}

export function SubscribeButtton(priceId: SubscribeButttonProps) {
  //Saber se o usuario ja está logado
  const {data: session} = useSession();

  async function HandleSubscrebe() {
    //se nao estiver logado
    if(!session) {
      signIn('github')
      return;
    } 
    //criação da checkout session
    try {
      const response = await api.post('/subscribe') //rota // nome do arquivo em pages/api/subscribe

      const { sessionId } = response.data; //pega a sessionId de response que retornamos de subscribe

      const stripe = await getStripeJs() //chamando a api publica de stripe.js.ts

      await stripe.redirectToCheckout({sessionId}) //redirecionar para o checkout passando o sessionId que criamos do api/subscribe
    }catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
    type="button"
    className={styles.subscribeButtton}
    onClick={HandleSubscrebe}
    >
      Subscribe now
    </button>
  )
} 