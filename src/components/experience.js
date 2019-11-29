import React from "react"
import styles from "./experience.module.scss"

export default props => (
  <div className={styles.experience}>
    <div className={styles.period}>{props.from} - {props.to}</div>
    <div className={styles.title}>{props.position}, {props.at}</div>
  </div>
)
