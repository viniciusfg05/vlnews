import styles from './styles.module.scss';

interface SubscribeButttonProps {
  priceId: string;
}

export function SubscribeButtton(priceId: SubscribeButttonProps) {
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