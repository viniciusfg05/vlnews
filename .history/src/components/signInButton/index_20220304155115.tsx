import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'

export function SingInButton() {
  return (
    <div className={styles.signInButtonContainer}>
      <button type="button">
        Sing in GitHub
      </button>
      
    </div>
  )
} 