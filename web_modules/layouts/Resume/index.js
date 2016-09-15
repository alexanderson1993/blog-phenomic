import React from "react"
import Page from "../Page"
import styles from "./style.css"

const Resume = (props) => {
  return (
    <div className={ styles.resumeContent }>
    <Page {...props} />
    </div>
    )
}

export default Resume
