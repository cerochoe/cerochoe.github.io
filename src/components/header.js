import React from "react"
import styles from "./header.module.scss"
import { Link } from "gatsby"

export default props => (
  <div className={styles.header}>
    <Link to="/">
    <div className={styles.name}>{props.title}</div>
    </Link>
    <div className={styles.description}>{props.description}</div>
  </div>
)
