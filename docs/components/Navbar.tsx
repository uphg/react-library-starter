import styles from '../styles/navbar.module.scss'
import Link from './Link'

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.body}>
        <div className={styles.prefix}>
          <Link className={styles['home-link']} to="/">
            <span className={styles['site-name']}>🍌 Banana UI</span>
          </Link>
        </div>
        <nav className={styles.menu}>
          <Link className={`nav-item ${styles.link}`} to="/">首页</Link>
          <Link className={`nav-item ${styles.link}`} to="/docs">文档</Link>
          <Link className={`nav-item ${styles.link}`} to="/start">Start</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar