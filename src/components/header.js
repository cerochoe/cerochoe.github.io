import React from "react"
import styles from "./header.module.css"
import { Link } from "gatsby"

export default () => (
  <div className={styles.header}>
    <Link to="/">
      <div className={styles.name}>Jeongbin Cero Choe</div>
    </Link>
    <div className={styles.description}>anti-apple</div>
  </div>
)
