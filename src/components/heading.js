import React from "react"
import styles from "./heading.module.css"

export default props => (
  <p className={styles.heading}>{props.title}</p>
)
