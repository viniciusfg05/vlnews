import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";//yarn add react-icons
import { FiX } from "react-icons/fi"
 

export function SingInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361"/>
      Vin1ciusfg
    </button>
      
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"/>
      Sing in with GitHub
    </button>
  );
} 