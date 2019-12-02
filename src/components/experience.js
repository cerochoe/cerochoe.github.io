import React from "react"
import styles from "./experience.module.scss"

export default props => (
  <div className={styles.experience}>
    <div className={styles.period}>{props.from} - {props.to}</div>
    <div>
      <span className={styles.title}>{props.title}, </span>

      {props.position ? <span className={styles.position}>{props.position}, </span> : <span></span> }

      <span className={styles.at}>
        {props.url ? <a href={props.url} target="_blank">{props.at}</a> : <span>{props.at}</span>}
      </span>

      {props.remark ? <span className={styles.remark}>{props.remark}</span> : <span></span>}
    </div>
  </div>
)
