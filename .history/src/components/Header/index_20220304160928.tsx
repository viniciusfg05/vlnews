import styles from './styles.module.scss';
import { SingInButton } from '../signInButton'


export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
       <div>
          <img src="/logo.svg" alt="vl.News" /> 
           <nav>
             <a href="#" className={styles.active}>Home</a>
             <a href="#">Posts</a>
           </nav>
       </div>
        <SingInButton />
      </div>
      
      
    </div>
  )
} 