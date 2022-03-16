import styles from './styles.module.scss';
import { SingInButton } from '../signInButton'
import Link from 'next/Link'
import { useRouter } from 'next/router';
import { ActiveLink } from '../activeLink';


export function Header() {
  const { asPath } = useRouter()
  console.log(asPath)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="vl.News" /> 
        <nav>
          <ActiveLink href="/" >
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" prefetch>
            <a >Posts</a>
          </ActiveLink>
        </nav>
      </div>
      <SingInButton />
      
      
    </div>
  )
} 