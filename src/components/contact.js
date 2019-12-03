import React from "react"
import styles from "./contact.module.scss"

export default props => (
  <a className={styles.contact} href={props.href} target="blank">
    <i className={["svg-icon", props.channel].join(" ")} />
  </a>
)
