import React from "react"
import styles from "./footer.module.scss"

function getYear() {
  return new Date().getFullYear()
}

export default props => (
  <div className={styles.footer}>
    <hr />
    <p className={styles.content}>© 2018 - <span>{getYear()}</span> CERO.KR</p>
  </div>
)
