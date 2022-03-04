import styles from './styles.module.scss';
import { SingInButton } from '../signInButton'


export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="vl.News" /> 
        <nav>
          <ul>
            <a href="#" className={styles.active}>Home</a>
            <a href="#">Posts</a>
          </ul>
        </nav>
        <SingInButton />
      </div>
      
      
    </div>
  )
} 