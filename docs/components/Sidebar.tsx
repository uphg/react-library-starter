import styles from '../styles/sidebar.module.scss'
import Link from './Link'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h2></h2>
      <div className={styles.links}>
        <Link to="" className={`sidebar-link ${styles.link}`}>Button 按钮</Link>
        <Link to="" className={`sidebar-link ${styles.link}`}>Input 输入框</Link>
        <Link to="" className={`sidebar-link ${styles.link}`}>Switch 开关</Link>
        <Link to="" className={`sidebar-link ${styles.link}`}>Radio 单选</Link>
        <Link to="" className={`sidebar-link ${styles.link}`}>Checkbox 多选</Link>
      </div>
    </div>
  )
}

export default Sidebar
