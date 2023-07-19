import styles from '../styles/home.module.scss'
import ReactLogo from '../assets/react.svg'

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.name}>
            <span className={styles.clip}>Vite</span>
          </h1>
          <p className={styles.text}>Next Generation Frontend Tooling</p>
          <p className={styles.tagline}>Get ready for a development environment that can finally catch up with you.</p>
        </div>
        <div className={styles.image}>
          <div className={styles['image-container']}>
            <div className={styles['image-bg']}></div>
            <img className={styles['image-src']} src={ReactLogo} alt="Vite"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home