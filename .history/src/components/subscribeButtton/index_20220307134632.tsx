import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButttonProps {
  priceId: string;
}

export function SubscribeButtton(priceId: SubscribeButttonProps) {
  //Saber se o usuario ja está logado
  const {data: session} = useSession();

  function HandleSubscrebe() {
    if(!session) {
      signIn()
      return
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