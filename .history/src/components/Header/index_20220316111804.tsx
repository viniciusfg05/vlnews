import styles from './styles.module.scss';
import { SingInButton } from '../signInButton'
import Link from 'next/Link'
import { useRouter } from 'next/router';


export function Header() {
  const { asPath } = useRouter()
  console.log(asPath)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="vl.News" /> 
        <nav>
          <Link href="/" >
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts" prefetch>
            <a >Posts</a>
          </Link>
        </nav>
      </div>
      <SingInButton />
      
      
    </div>
  )
} 