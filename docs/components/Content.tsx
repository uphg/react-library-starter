import { ReactNode } from 'react'
import styles from '../styles/content.module.scss'

type Props = {
  children: ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  ) 
}

export default Content