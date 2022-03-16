import styles from './styles.module.scss';
import { SingInButton } from '../signInButton'
import Link from 'next/Link'


export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="vl.News" /> 
        <nav>
          <Link href="#" >
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a >Posts</a>
          </Link>
        </nav>
      </div>
      <SingInButton />
      
      
    </div>
  )
} 