import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";//yarn add react-icons
 

export function SingInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"/>
      Vin1ciusfg
    </button>
      
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"/>
      Sing in with GitHub
    </button>
  );
} 