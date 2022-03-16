import styles from './styles.module.scss';
import { SingInButton } from '../signInButton'
import Link from 'next/Link'


export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="vl.News" /> 
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
      <SingInButton />
      
      
    </div>
  )
} 