import React from "react"
import styles from "./heading.module.scss"

export default props => (
  <p className={styles.heading}>{props.title}</p>
)
