import { useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButttonProps {
  priceId: string;
}

export function SubscribeButtton(priceId: SubscribeButttonProps) {
  //Saber se o usuario ja está logado
  const [data: Session] = useSession();

  function HandleSubscrebe() {

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