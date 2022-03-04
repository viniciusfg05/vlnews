import styles from '../Header/styles.styles.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src="/images/logo.svg" alt="vl.News" /> 
      <nav>
        <a href="#">Home</a>
        <a href="#">Posts</a>
      </nav>
    </div>
  )
} 