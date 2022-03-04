import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="vl.News" /> 
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
      
    </div>
  )
} 