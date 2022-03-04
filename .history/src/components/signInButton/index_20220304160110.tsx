import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";//yarn add react-icons


export function SingInButton() {
  return (
    <div className={styles.signInButtonContainer}>
      <button type="button">
        <FaGithub />
        Sing in with GitHub
      </button>
      
    </div>
  )
} 