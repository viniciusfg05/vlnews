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

// #Stripe
// STRIPE_API_KEY=sk_test_51KaMv1F0aa4KZVxjGUEk1dxjod6HYqvIxTrGXAAtPXoGoSfyRuc51u7QFKbfsMsEl4qLJpWYxvQstHp24QmgkfTF00AqI0OplI
// NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51KaMv1F0aa4KZVxjEb9DVL9ZkjFOZ4TnuN3bnSIfG7yvCOAIxUFDIfMC7y6BijB1M8ddrGeixfIWrqv7W92BuKPE00guOHa2DG
// STRIPE_SUCCESS_URL=http://localhost:3000/posts
// STRIPE_CANCEL_URL=http://localhost:3000/

// GITHUB_CLIENT_ID=6b7885690cc4c2f85503
// GITHUB_CLIENT_SECRET=1f64bdcce9200bd6465eaf296fe19dc71533898d

// FAUNA_DB_API_KEY=fnAEhBss9WACT7pyf9RLxKStC51-4C83WuIgxU7F