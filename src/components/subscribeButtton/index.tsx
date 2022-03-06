import styles from './styles.module.scss';

interface SubscribeButttonProps {
  priceId: string;
}

export function SubscribeButtton(priceId: SubscribeButttonProps) {
  return (
    <button
    type="button"
    className={styles.subscribeButtton}
    >
      Subscribe now
    </button>
  )
} 