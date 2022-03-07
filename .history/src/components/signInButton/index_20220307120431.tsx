import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";//yarn add react-icons
import { FiX } from "react-icons/fi"
import { signIn, signOut, useSession } from 'next-auth/react'
 

export function SingInButton() {
  const { data: session } = useSession()

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04d361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.ColoseIcon}/> 
    </button>
      
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417"/>
      Sing in with GitHub
    </button>
  );
} 