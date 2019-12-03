import React from 'react'
import styles from './remark.module.scss'

export default props => (
  <div>
    <p className={styles.remark}>{props.content}</p>
  </div>
)
