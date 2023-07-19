import React, { ReactNode } from "react"
import styles from '../styles/demo.module.scss'

type Props = {
  children: ReactNode
  component: ReactNode
  path?: string
  code?: string
}

const Link: React.FC<Props> = ({ path, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.component}>{children}</div>
      <div className={styles['code-wrap']}>
        <div className={styles.code} dangerouslySetInnerHTML={{ __html: path! }}></div>
      </div>
    </div>
  )
}

export default Link
