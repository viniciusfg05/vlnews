import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";//yarn add react-icons
 

export function SingInButton() {
  return (
      <button type="button" className={styles.signInButton}>
        <FaGithub color="#eba417"/>
        Sing in with GitHub
      </button>
      
  )
} 